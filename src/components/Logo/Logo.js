import React from 'react';
import {Link} from 'react-router-dom';

import vesselLogo from '../../assets/images/SHIP_2_small_white.png';
import papeiImg from '../../assets/images/papeiLogo.png'
import classes from './Logo.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const logo = props => {
    //  Including basic logic to make the Logo reusable  Stavros Lamprinos on 23/12/2020
    let preferences = {link : '/'}

    switch (props.logoType) {
        case ('appLogo'):
            preferences.src = vesselLogo;
            preferences.alt = 'Vessel logo';
            break;
        case('papeiLogo'):
            preferences.link = 'https://www.ds.unipi.gr/';
            preferences.src = papeiImg;
            preferences.target = '_black';
            preferences.rel = 'noreferrer';
            preferences.alt = 'Logo of University of Piraeus';
            break;
        default:
            break;
    }

    const link = props.logoType === 'papeiLogo' ?
        <a href={preferences.link}
           target={preferences.target}
           rel={preferences.rel}>
            <img src={preferences.src}
                 alt={preferences.alt}/>
        </a> :
        <Link to={preferences.link}>
            <img src={preferences.src}
                 alt={preferences.alt}/>
        </Link>

    return (
        <div className={classes.Logo}>
            {link}
        </div>
    );
};

export default logo;