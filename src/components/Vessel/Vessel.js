import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Vessel.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const vessel = props => {

    return (
        <div className={classes.Vessel}>
            <h4 style={{textAlign: 'center'}}>_Vessel Name_</h4>
            <hr style={{width: '85%'}}/>
            <div className={classes.Stats}>
                <p>Τύπος: _vessel_type_</p>
                <p><abbr title="Maritime Mobile Service Identity">MMSI</abbr>: _mmsi_</p>
                <p>Διακριτικό Πλοίου: _call_sign_</p>
                <p>Σημαία: _vessel_country</p>
                <Button btnType="Info"
                        clicked={props.continueVesselInfo}>
                    Αναλυτικά Στοιχεία
                </Button>
            </div>
        </div>
    )
}

export default vessel;