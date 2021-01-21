import React, {Component} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from '../../components/UI/Spinner/Spinner';
import DataNotFound from '../../components/UI/DataNotFound/DataNotFound';
import Vessel from '../../components/Vessel/Vessel';
import SearchForm from '../../components/SearchForm/SearchForm';

import classes from './Vessels.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

class Vessels extends Component {
    _isMounted = false;
    //  Added infinite scrolling with lazy loading Stavros Lamprinos on 30/12/2020
    state = {
        shipTypeParam: '',
        countryParam: '',
        url: null,
        path: '',
        vessels: [],
        loading: false,
        page: 0,
        prevY: 0,
        toTop: false
    }

    loadData = (path, page) => {
        this.setState({loading: true});
        let config = {
            headers: {
                'skip': page,
                'Accept': 'application/json',
            }
        };

        axios.get(path, config).then(response => {
            // console.log(path);
            const data = page === 0 ?
                [...response.data] :
                [...this.state.vessels, ...response.data];
            // console.log(data.length);
            this.setState({
                vessels: data,
                loading: false
            });
        });
    }

    //  observer of loading page event
    observeHandler = entities => {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            // const lastVessel = this.state.vessels[this.state.vessels.length - 1];
            const currentPage = this.state.vessels.length;
            const path = this.state.url ? this.state.url : 'vessels';
            this.loadData(path, currentPage);
            this.setState({page: currentPage, toTop: true});
        }
        this.setState({prevY: y});
    }

    componentDidMount() {
        this._isMounted = true;

        this.loadData(this.props.match.path, this.state.page);
        window.addEventListener('scroll', this.checkScrollTop);

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        this.observer = new IntersectionObserver(this.observeHandler.bind(this), options);
        this.observer.observe(this.loadingRef);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    //  vesselId is created upon mapping
    continueVesselInfoHandler = vesselId => {
        this.props.history
            .push(`${this.props.match.url}/vessel-info/${vesselId}`);
    }

    changeOptionHandler = (listId, optionValue) => {
        const path = optionValue !== '' ? `${listId}/${optionValue}` : '';
        let shipTypeParam = this.state.shipTypeParam;
        let countryParam = this.state.countryParam;
        let url;
        //  to be stored in const and then make the get request
        //  bug fixed when shipType is null after a country is selected Stavros Laprinos 21/1/21
        if (listId === 'type') {
            shipTypeParam = path;
            url = `${this.props.match.url}${path ? '/' + path : ''}${countryParam !== '' ? '/' + countryParam : ''}`;
        } else {
            countryParam = path;
            url = `${this.props.match.url}/${shipTypeParam !== '' ? shipTypeParam + '/' : ''}${countryParam}`;
        }
        this.setState({
            shipTypeParam: shipTypeParam,
            countryParam: countryParam,
            url: url,
            page: 0
        });
        // initial loading of new data
        this.loadData(url, 0);
        this.topRequestHandler();
    }

    topRequestHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    checkScrollTop = () => {
        if (!this.state.toTop && window.pageYOffset > 400) {
            this.setState({toTop: true});
            // console.log('state set: ' + this.state.toTop);
        } else if (this.state.toTop && window.pageYOffset <= 400) {
            this.setState({toTop: false});
            // console.log('state set: ' + this.state.toTop);
        }
    }

    render() {
        const loadingCSS = {
            height: '100px',
            margin: '30px'
        };

        const vessels = //this.state.loading ?
            //<Spinner /> :
            this.state.vessels.map(response => {
                return (
                    <Vessel key={response.mmsi}
                            name={response.vesselName}
                            mmsi={response.mmsi}
                            shipType={response.shipType}
                            country={response.country}
                            show
                            continueVesselInfo={() => this
                                .continueVesselInfoHandler(response.mmsi)}/>
                );
            });

        return (
            <div style={{padding: '1rem 0'}}>
                <FaArrowCircleUp className={classes.Top}
                                 onClick={this.topRequestHandler}
                                 style={{
                                     height: 40,
                                     display: this.state.toTop ?
                                         'flex' :
                                         'none'
                                 }}/>
                <SearchForm changed={this.changeOptionHandler}/>
                {vessels.length !== 0 ? vessels : <DataNotFound/>}
                <div ref={loadingRef => (this.loadingRef = loadingRef)}
                     style={loadingCSS}>
                    {this.state.loading ? <Spinner/> : null}
                </div>
            </div>
        );
    }
}

export default withErrorHandler(Vessels, axios);
