import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/"
            active>
            Αρχική
        </NavigationItem>
        <NavigationItem
            link="/">
            Πλοία
        </NavigationItem>
        <NavigationItem
            link="/">
            Λιμάνια
        </NavigationItem>
        <NavigationItem
            link="/">
            Πληροφορίες
        </NavigationItem>
    </ul>
);

export default navigationItems;