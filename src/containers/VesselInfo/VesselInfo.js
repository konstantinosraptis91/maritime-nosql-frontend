import React, {Component} from 'react';

import classes from './VesselInfo.module.css';
import Button from '../../components/UI/Button/Button';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */


class VesselInfo extends Component {

    render() {
        return (
            <div className={classes.VesselInfo}>
                <h3 style={{textAlign: 'center'}}>_Vessel Name_</h3>
                <div className={classes.Stats}>
                    <p>Τύπος: _vessel_type_</p>
                    <p><abbr title="Maritime Mobile Service Identity">MMSI</abbr>: _mmsi_</p>
                    <p>Διακριτικό Πλοίου: _call_sign_</p>
                    <p>Βύθισμα: _draught_</p>
                    <p>Σημαία: _vessel_country</p>
                    <Button btnType="Success"
                            clicked>
                        Τροχιές πλοίου στο χάρτη
                    </Button>
                </div>
                <hr style={{width: '90%'}}/>
                <p>Vessel destinations will be placed here</p>
            </div>
        );
    }
}

export default VesselInfo;