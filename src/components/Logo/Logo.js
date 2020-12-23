import React from 'react';
import vesselLogo from '../../assets/images/SHIP_2_small_white.png';
import classes from './Logo.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const logo = props => (
    <div className={classes.Logo}>
        <a href="/">
            <img src={vesselLogo} alt="Vessel logo"/>
        </a>
    </div>
);

export default logo;