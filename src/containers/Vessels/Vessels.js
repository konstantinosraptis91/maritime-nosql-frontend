import React, {Component} from 'react';
import axios from '../../axios-maritime';

import Spinner from '../../components/UI/Spinner/Spinner';
import Vessel from '../../components/Vessel/Vessel';
import SearchForm from '../../components/SearchForm/SearchForm';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

class Vessels extends Component {

    state = {
        shipTypeParam: '',
        countryParam: '',
        path: '',
        vessels: [],
        loading: false
    }

    loadData = path => {
        this.setState({loading: true});
        let config = {
            headers: {
                'skip': 0,
                // 'limit': 30,
                'Accept': 'application/json',
            }
        };

        //  import dummy link from backend until it gets implemented
        axios.get(path,  config)
            .then(response => {
                this.setState({vessels: response.data, loading: false});
            });
    }

    componentDidMount() {
        this.loadData('vessels/shiptype/Fishing');
    }

    //  vesselId is created upon mapping
    continueVesselInfoHandler = vesselId => {
        this.props.history
            .push(`${this.props.match.url}/vessel-info/${vesselId}`);
    }

    changeOptionHandler = (listId, optionValue) => {
        const path = `${listId}/${optionValue}`;
        let shipTypeParam = this.state.shipTypeParam;
        let countryParam = this.state.countryParam;
        let url;
        //  to be stored in const and then make the get request
        if (listId === 'shiptype') {
            shipTypeParam = path;
            url =  `vessels/${path}${countryParam !== '' ? '/' + countryParam: ''}`;
        } else {
            countryParam = path;
            url = `vessels/${shipTypeParam !== '' ? shipTypeParam + '/' : ''}${countryParam}`;
        }
        this.setState({shipTypeParam: shipTypeParam, countryParam:countryParam });
        console.log(url);
        this.loadData(url);
    }


    render() {

        const vessels = this.state.loading ?
            <Spinner/> :
            this.state.vessels.map(response => {
            return (
                <Vessel key={response.mmsi}
                        name={response.vesselName}
                        mmsi={response.mmsi}
                        shipType={response.shipType}
                        country={response.country}
                        continueVesselInfo={() => this
                            .continueVesselInfoHandler(response.mmsi)}/>
            );
        })

        return (
            <div style={{padding: '1rem 0'}}>
                <SearchForm changed={this.changeOptionHandler}/>
                {vessels}
            </div>
        );
    }
}

export default Vessels;
