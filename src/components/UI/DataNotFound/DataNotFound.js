import React from 'react';
import {FaExclamationTriangle} from "react-icons/fa";

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 2/1/2021.
 */

const dataNotFound = () => {
    const style = {
        textAlign: 'center',
        fontSize: '2rem',
        color: '#5f5c5c'
    };
    return (
        <h4 style={style}>
            <FaExclamationTriangle/>
            <span style={{paddingLeft: '1.1rem'}}>
                Δεν βρέθηκαν δεδομένα. Αλλάξτε τα φίλτρα αναζήτησης
            </span>
        </h4>
    );
}

export default dataNotFound;