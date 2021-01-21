import React, {Component} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import DataNotFound from '../../components/UI/DataNotFound/DataNotFound';
import Port from '../../components/Port/Port';

import classes from '../Vessels/Vessels.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 8/1/2021.
 */

class NearPorts extends Component {
    _isMounted = false;
    path = `/ports/near/vessel/mmsi/${this.props.match.params.mmsi}/dist/${this.props.match.params.dist}`;

    state = {
        path: '',
        ports: [],
        loading: true,
        page: 0,
        prevY: 0,
        toTop: false
    }

    loadData = (path, page) => {
        console.log(path);
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
            // console.log('length: ' + this.state.ports.length);
        });
    }

    //  observer of loading page event
    observeHandler = entities => {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            const currentPage = this.state.ports.length;
            this.loadData(this.path, currentPage);
            this.setState({page: currentPage, toTop: true});
        }
        this.setState({prevY: y});
    }

    componentDidMount() {
        this._isMounted = true;
        console.log(this.path);
        this.loadData(this.path, this.state.page);
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
            textAlign: 'center',
            fontSize: '1.8rem',
            width: '80%',
            margin: '.5rem auto'
        };

        const ports = this.state.loading ?
            <Spinner /> :
            this.state.ports.map((port, index) => {
                return (
                    <Port key={port + index}
                            name={port.name}
                            country={port.country}
                            coordinates={port.geoPoint.coordinates}/>
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
                <h2 style={style}>Λίστα Λιμανιών</h2>
                <p style={style}>Παρουσιάζονται όλα τα λιμάνια από τα οποία πέρασε κοντά το πλοίο
                    στη διάρκεια όλων των ταξιδιών του
                    σε αύξουσα σειρά απόστασης</p>
                {ports.length !== 0 ? ports : <DataNotFound/>}
                <div ref={loadingRef => (this.loadingRef = loadingRef)}
                     style={loadingCSS}>
                    {this.state.loading ? <Spinner/> : null}
                </div>
            </div>
        );
    }
}

export default withErrorHandler(NearPorts, axios);