import React from 'react';

import classes from './vesselInfoCockpit.module.css';

const vesselInfoCockpit = props => {

    return (
        <div className={classes.Cockpit}>
            <button onClick={props.showStatic}
                    className={props.activeBtn ? classes.active : ''}>Static</button>
            <button onClick={props.showDynamic}
                    className={!props.activeBtn ? classes.active : ''}>Dynamic</button>
        </div>
    );
}

export default vesselInfoCockpit;