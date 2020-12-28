import React from 'react';
import classes from './DrawerToggle.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

/* functional component added to display sideDrawer in mobile devices*/
const drawerToggle = props => (
    <div
        className={classes.DrawerToggle}
        onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;