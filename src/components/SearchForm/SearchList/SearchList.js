import React from 'react';

import classes from './SearchList.module.css';

const searchList = props => {

    return (
        <div className={classes.SearchList}>
            <label htmlFor={props.typesId}>Τύπος Πλοίου: </label>
            <select name={props.typesName}
                    id={props.typesId}
                    onChange={
                        (event) => props.changed(props.typesId, event.target.value)}>
                {props.typesOptions.map(option => (
                    <option value={option}
                            key={option}>
                        {option}
                    </option>
                ))}
            </select>
            <label htmlFor={props.countryId}>Σημαία Πλοίου: </label>
            <select name={props.countryName}
                    id={props.countryId}
                    onChange={
                        (event) => props.changed(props.countryId, event.target.value)}>
                {props.countryOptions.map(option => (
                    <option value={option}
                            key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>

    );
}

export default searchList;