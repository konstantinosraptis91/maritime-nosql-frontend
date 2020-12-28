import React, {Component} from 'react';
import axios from '../../axios-maritime';

import Vessel from '../../components/Vessel/Vessel';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

class Vessels extends Component {
    //  vesselId is created upon mapping
    continueVesselInfoHandler = vesselId => {
        this.props.history
            .push(`${this.props.match.url}/vessel-info/${vesselId}`);
    }


    render() {
        return (
            <div style={{padding: '1rem 0'}}>
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
                <Vessel continueVesselInfo={() => this.continueVesselInfoHandler(33332)}/>
            </div>
        );
    }
}

export default Vessels;
