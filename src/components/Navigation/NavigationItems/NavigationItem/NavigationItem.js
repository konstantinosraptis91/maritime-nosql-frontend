import React from 'react';
import classes from './NavigationItem.module.css'

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <a href={props.link}
           className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;