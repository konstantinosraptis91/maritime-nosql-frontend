import React from 'react';

import classes from './Card.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 10/1/2021.
 */

const card = props => (
    <a href={props.url} className={classes.Link} target="_blank" rel="noreferrer">
        <div className={classes.Container}>
            <img src={props.image} alt={props.alt}/>
            <h3 className={classes.Title}>{props.title}</h3>
            <div className={classes.Description}>
                {props.description}
            </div>
        </div>
    </a>
);

export default card;