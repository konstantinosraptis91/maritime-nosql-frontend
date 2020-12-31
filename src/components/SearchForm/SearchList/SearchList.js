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
                {props.typesOptions.map((option, index) => (
                    <option value={option === 'all' ? '' : option}
                            key={option + index}>
                        {option === 'all' ? 'Επιλέξτε τύπο πλοίου' : option}
                    </option>
                ))}
            </select>
        </div>

    );
}

export default searchList;