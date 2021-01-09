import React from 'react';

import classes from './Card.module.css';

const card = props => {

    return (
        <div style={{color: '#fff', backgroundColor: 'black'}}>
            <h3 className={classes.Title}>{props.title}</h3>
            <div>
                {props.description}
            </div>
        </div>
    );
}

export default card;