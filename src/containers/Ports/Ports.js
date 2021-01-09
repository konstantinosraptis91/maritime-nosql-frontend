import React, {Component} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import SearchInput from '../../components/SearchForm/SearchInput/SearchInput';
import PortSearchForm from '../../components/SearchForm/PortSearchForm';
import DataNotFound from '../../components/UI/DataNotFound/DataNotFound';
import classes from '../Vessels/Vessels.module.css';
import Port from '../../components/Port/Port';


/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 2/1/2021.
 */

class Ports extends Component {

    _isMounted = false;
    state = {
        loading: false,
        url: null,
        ports: [],
        selectedCoordinates: [],
        distance: 0,
        page: 0,
        prevY: 0,
        toTop: false,
        showDistance: false,
        searchable: false
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

    continueNearVesselsHandler = () => {
        const lon = this.state.selectedCoordinates[0];
        const lat = this.state.selectedCoordinates[1];
        const distInKm = this.state.distance * 1000;
        this.props.history
            .push(`ports/vessels/near/lon/${lon}/lat/${lat}/dist/${distInKm}`);
    }

    changeOptionHandler = (_, optionValue) => {
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

    distanceHandler = coordinates => {
        this.setState({
            showDistance: true,
            selectedCoordinates: coordinates
        });
    }

    distanceCancelHandler = () => {
        this.setState({showDistance: false});
    }

    distanceChangeHandler = dist => {
        this.setState({distance: dist, searchable: dist > 0});
    }

    render() {
        const loadingCSS = {
            height: '100px',
            margin: '30px'
        };

        const ports = this.state.ports.map((port, index) => (
            <Port key={port + index}
                  name={port.name}
                  country={port.country}
                  coordinates={port.geoPoint.coordinates}
                  distance={() => this.distanceHandler(port.geoPoint.coordinates)}
                  show/>
        ))

        return (
            <div style={{padding: '1rem 0'}}>
                <Modal show={this.state.showDistance}
                       closeModal={this.distanceCancelHandler}>
                    <SearchInput disabled={!this.state.searchable}
                                 changed={this.distanceChangeHandler}
                                 clicked={this.continueNearVesselsHandler}/>
                </Modal>
                <FaArrowCircleUp className={classes.Top}
                                 onClick={this.topRequestHandler}
                                 style={{
                                     height: 40,
                                     display: this.state.toTop ?
                                         'flex' :
                                         'none'
                                 }}/>
                <PortSearchForm changed={this.changeOptionHandler}/>
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