import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/" exact>
            Αρχική
        </NavigationItem>
        <NavigationItem
            link="/vessels">
            Πλοία
        </NavigationItem>
        <NavigationItem
            link="/ports">
            Λιμάνια
        </NavigationItem>
        <NavigationItem
            link="/info">
            Πληροφορίες
        </NavigationItem>
    </ul>
);

export default navigationItems;