import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Vessel.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */

const vessel = props => {

    return (
        <div className={classes.Vessel}>
            <h4 style={{textAlign: 'center'}}>{props.name}</h4>
            <hr style={{width: '85%'}}/>
            <div className={classes.Stats}>
                <p>Τύπος: {props.shipType}</p>
                <p><abbr title="Maritime Mobile Service Identity">MMSI</abbr>: {props.mmsi}</p>
                <p>Σημαία: {props.country}</p>
            </div>
            <hr style={{width: '85%'}}/>
            {props.show ?
                <Button btnType="Info"
                                  clicked={props.continueVesselInfo}>
                Αναλυτικά Στοιχεία
                </Button> : null}
        </div>
    )
}

export default vessel;