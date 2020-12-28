import React from 'react';
import classes from './Button.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const button = props => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;
