import React from 'react';
import classes from './Backdrop.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const backdrop = props => (
    props.show ? <div className={classes.Backdrop} onClick={props.close}></div>: null
);

export default backdrop;