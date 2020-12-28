import React from 'react';

import classes from './Vessel.module.css';

const vessel = props => {

    return (
        <div className={classes.Vessel}>
            <h1>Vessel Name</h1>
            <hr/>
            <div className={classes.Stats}>
                <p>Vessel Type: _vessel_type_</p>
                <p>Vessel Flag: _vessel_country</p>
            </div>
        </div>
    )
}

export default vessel;