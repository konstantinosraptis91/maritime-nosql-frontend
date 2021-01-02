import React from 'react';

import Button from '../UI/Button/Button';
import classes from './VesselInfoSummary.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 31/12/2020.
 */

const vesselInfoSummary = props => (
    <div className={classes.VesselInfo}>
        <div>
            <p style={{
                position: 'absolute',
                left: '7%',
                bottom: '72%',
                fontSize: '.8rem',
                color: '#187aba'
            }}>Πηγή: AIS Nari Static</p>
            <h3 style={{textAlign: 'center'}}><span>{props.vessel.vesselName}</span></h3>
        </div>
        <hr style={{width: '90%'}}/>
        <div className={classes.Stats}>
            <p>Τύπος: <span>{props.vessel.shipType}</span></p>
            <p>
                <abbr title="Maritime Mobile Service Identity">MMSI</abbr>
                : <span>{props.vessel.mmsi}</span>
            </p>
            <p>Διακριτικό Πλοίου: <span>{props.vessel.callSign}</span></p>
            { props.vessel.imo ?
                <p>
                    <abbr title="International Maritime Organization number">IMO</abbr>:
                    <span> {props.vessel.imo}</span>
                </p> : null
            }
            {props.vessel.draught !== 0 ?
                <p>Βύθισμα: <span>{props.vessel.draught}</span></p> : null}
            <p>Σημαία: <span>{props.vessel.country}</span></p>
        </div>
        <hr style={{width: '90%'}}/>
        <Button btnType="Success"
                clicked={props.trajectoryContinue}>
            Εμφάνιση Τροχιών του <strong>{props.vessel.vesselName}</strong> στον χάρτη
        </Button>
    </div>
);

export default vesselInfoSummary;