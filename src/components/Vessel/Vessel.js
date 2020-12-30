import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Vessel.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const vessel = props => {

    return (
        <div className={classes.Vessel}>
            <span style={{
                backgroundColor: '#222',
                opacity: '.7'
            }}>
                <h4 style={{textAlign: 'center'}}>{props.name}</h4>
            </span>
            <hr style={{width: '85%'}}/>
            <div className={classes.Stats}>
                <p>Τύπος: {props.shipType}</p>
                <p><abbr title="Maritime Mobile Service Identity">MMSI</abbr>: {props.mmsi}</p>
                {/*<p>Διακριτικό Πλοίου: _call_sign_</p>*/}
                <p>Σημαία: {props.country}</p>

            </div>
            <hr style={{width: '85%'}}/>
            <Button btnType="Info"
                    clicked={props.continueVesselInfo}>
                Αναλυτικά Στοιχεία
            </Button>
        </div>
    )
}

export default vessel;