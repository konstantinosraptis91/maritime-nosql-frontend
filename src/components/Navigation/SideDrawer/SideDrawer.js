import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const sideDrawer = props => {
    const attachedClasses = props.open ?
        [classes.SideDrawer, classes.Open] :
        [classes.SideDrawer, classes.Close]

    return (
        <Auxiliary>
            <Backdrop show={props.open} close={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;