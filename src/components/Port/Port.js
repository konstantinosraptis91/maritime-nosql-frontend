import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Port.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 2/1/2021.
 */

const port = props => {
    const coordTitleStyle = {
        fontSize: '1.2rem',
        color: '#40A4C8',
        fontWeight: '100'
    }
    return (
        <div className={classes.Port}>
            <h4 style={{textAlign: 'center'}}>{props.name}</h4>
            <hr style={{width: '85%'}}/>
            <div className={classes.Stats}>
                <p>Χώρα: {props.country}</p>
                <div className={classes.Coordinates}>
                    <p style={coordTitleStyle}>Γεωγραφικές Συντεταγμένες</p>
                    <p>Μήκος: {props.coordinates[0]}</p>
                    <p>Πλάτος: {props.coordinates[1]}</p>
                </div>
            </div>
            <hr style={{width: '85%'}}/>
            <Button btnType="Info"
                    clicked={props.continueNearVessel}>
                Εμφάνιση Κοντινών Πλοίων
            </Button>
        </div>
    )
};

export default port;
