import React, {Component} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from '../../components/UI/Spinner/Spinner';
import DataNotFound from '../../components/UI/DataNotFound/DataNotFound';
import classes from '../Vessels/Vessels.module.css';
import Port from '../../components/Port/Port';


class Ports extends Component {

    _isMounted = false;
    state = {
        loading: false,
        url: null,
        ports: [],
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
                [...this.state.ports, ...response.data];
            this.setState({
                ports: data,
                loading: false
            });
        });
    }

    observeHandler = entities => {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const currentPage = this.state.ports.length;
            const path = this.state.url ? this.state.url : 'ports';
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

    continueNearVesselsHandler = portCoordinates => {
        const lon = portCoordinates[0];
        const lat = portCoordinates[1];
        this.props.history
            .push(`${this.props.match.url}/near-vessels/lon/${lon}/lat/${lat}`);
    }

    changeOptionHandler = (optionValue) => {
        const path = optionValue !== '' ? `country/${optionValue}` : '';
        const url = `${this.props.match.url}/${path}`;

        this.setState({
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

        const ports = this.state.ports.map(port => (
            <Port name={port.name}
                  country={port.country}
                  coordinates={port.geoPoint.coordinates}
                  continueNearVessel=
                      {() => this.continueNearVesselsHandler(port.geoPoint.coordinates)}/>
        ))

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
                {/*<SearchForm changed={this.changeOptionHandler}/>*/}
                {ports.length !== 0 ? ports : <DataNotFound/>}
                <div ref={loadingRef => (this.loadingRef = loadingRef)}
                     style={loadingCSS}>
                    {this.state.loading ? <Spinner/> : null}
                </div>
            </div>
        );
    }
}

export default withErrorHandler(Ports, axios);