import React, {Component} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import DataNotFound from '../../components/UI/DataNotFound/DataNotFound';
import Vessel from '../../components/Vessel/Vessel';

import classes from '../Vessels/Vessels.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 7/1/2021.
 */


class NearVessels extends Component {
    _isMounted = false;
    state = {
        path: '',
        vessels: [],
        loading: true,
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
            const data = page === 0 ?
                [...response.data] :
                [...this.state.vessels, ...response.data];
            this.setState({
                vessels: data,
                loading: false
            });
            console.log('length: ' + this.state.vessels.length);
        });
    }

    //  observer of loading page event
    observeHandler = entities => {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const currentPage = this.state.vessels.length;
            this.loadData(this.props.match.url.substring(6), currentPage);
            this.setState({page: currentPage, toTop: true});
        }
        this.setState({prevY: y});
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadData(this.props.match.url.substring(6), this.state.page);
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

    topRequestHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    checkScrollTop = () => {
        if (!this.state.toTop && window.pageYOffset > 400) {
            this.setState({toTop: true});
        } else if (this.state.toTop && window.pageYOffset <= 400) {
            this.setState({toTop: false});
        }
    }

    render() {
        const loadingCSS = {
            height: '100px',
            margin: '30px'
        };

        const style = {
            textAlign: 'center'
        }

        const vessels = this.state.loading ?
            <Spinner /> :
            this.state.vessels.map(response => {
                return (
                    <Vessel key={response.mmsi}
                            name={response.vesselName}
                            mmsi={response.mmsi}
                            shipType={response.shipType}
                            country={response.country}/>
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
                <h2 style={style}>Λίστα πλοίων</h2>
                <p style={style}>Παρουσιάζονται όλα τα πλοία που βρέθηκαν κοντά στο λιμάνι σε αύξουσα σειρά απόστασης</p>
                {vessels.length !== 0 ? vessels : <DataNotFound/>}
                <div ref={loadingRef => (this.loadingRef = loadingRef)}
                     style={loadingCSS}>
                    {this.state.loading ? <Spinner/> : null}
                </div>
            </div>
        );
    }
}

export default withErrorHandler(NearVessels, axios);
