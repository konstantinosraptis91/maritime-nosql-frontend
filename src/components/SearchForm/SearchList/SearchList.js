import React from 'react';

import classes from './SearchList.module.css';

const searchList = props => {

    return (
        <div className={classes.SearchList}>
            <label htmlFor={props.typesId}>{props.typesTitle}</label>
            <select name={props.typesName}
                    id={props.typesId}
                    className={classes.ChosenSelect}
                    onChange={
                        (event) => props.changed(props.typesId, encodeURIComponent(event.target.value))}>
                {props.typesOptions.map((option, index) => (
                    <option value={option.code}
                            key={option + index}>
                        {option.name === 'all' ? 'Επιλέξτε' : option.name}
                    </option>
                ))}
            </select>
        </div>

    );
}

export default searchList;