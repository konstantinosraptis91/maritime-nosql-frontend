import React, {Component} from 'react';
import axios from '../../axios-maritime';

import Vessel from '../../components/Vessel/Vessel';
import SearchForm from '../../components/SearchForm/SearchForm';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

class Vessels extends Component {

    state = {
        vessels: [],
        loading: true
    }

    componentDidMount() {
        // let params = {'HTTP_CONTENT_LANGUAGE': self.language};
        let config = {
            headers: {
                skip: 0,
                limit: 30
            }
        };

        //  import dummy link from backend until it gets implemented
        axios.get('vessels/shiptype/Fishing')
            .then(response => {
                console.log(response.data);
            })
    }

    //  vesselId is created upon mapping
    continueVesselInfoHandler = vesselId => {
        this.props.history
            .push(`${this.props.match.url}/vessel-info/${vesselId}`);
    }


    render() {
        return (
            <div style={{padding: '1rem 0'}}>
                <SearchForm />
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
            </div>
        );
    }
}

export default Vessels;
