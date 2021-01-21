import React from 'react';

import classes from './VesselInfoVoyage.module.css';

import msToHours from '../../../assets/globals/globalFuncs';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 31/12/2020.
 */

const vesselInfoVoyage = props => {

    return (
        <div className={classes.VesselInfoVoyage}>
            <div>
                <p>Προορισμός: <span>{props.voyage.destination}</span></p>
                <p>Διάρκεια: <span>{msToHours(Number.parseInt(props.voyage.durationInMs))}</span></p>
                <p>Πλήθος Μετρήσεων: <span>{props.voyage.numberOfMeasurements}</span></p>
            </div>
            <div>
                <div>
                    Στοιχεία πρώτης μέτρησης:
                    <ul>
                        <li><abbr title="Estimated Time of Arrival LT">
                            ETA: </abbr>
                            <span>{props.voyage.firstMeasurement.eta}</span>
                        </li>
                        <li>
                            Απόσταση από λιμάνι: <span>{props.voyage.firstMeasurement.toPort} m</span>
                        </li>
                        <li>
                            Ημερομηνία: <span>{props.voyage.firstMeasurement.date}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    Στοιχεία Τελευταίας μέτρησης:
                    <ul>
                        <li><abbr title="Estimated Time of Arrival LT">
                            ETA: </abbr>
                            <span>{props.voyage.lastMeasurement.eta}</span>
                        </li>
                        <li>
                            Απόσταση από λιμάνι: <span>{props.voyage.lastMeasurement.toPort} m</span>
                        </li>
                        <li>
                            Ημερομηνία: <span>{props.voyage.lastMeasurement.date}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default vesselInfoVoyage;