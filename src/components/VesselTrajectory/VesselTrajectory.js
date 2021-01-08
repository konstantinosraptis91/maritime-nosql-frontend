import React from 'react';

import classes from './VesselTrajectory.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 8/1/2021.
 */


const vesselTrajectory = props => {

    const {startDate, endDate, avgGeoPoint, avgSpeed, numberOfPoints} = props.trajectory;

    return (
        <div className={classes.VesselTrajectory}>
            <h4 style={{textAlign: 'center'}}>
                Από: {startDate}
                <span>Έως: {endDate}</span>
            </h4>
            <hr style={{width: '85%'}}/>
            <div className={classes.Stats}>
                <p>Πλήθος Σημείων Κανονικοποίησης: {numberOfPoints}</p>
                <p>Μέση Ταχύτητα: {avgSpeed}</p>
                <div className={classes.Coords}>
                    <p>Γεωγραφικές Συντεταγμένες</p>
                    <p>Μήκος: {avgGeoPoint.coordinates[0]}</p>
                    <p>Πλάτος: {avgGeoPoint.coordinates[1]}</p>
                </div>
            </div>
        </div>
    );
}

export default vesselTrajectory;