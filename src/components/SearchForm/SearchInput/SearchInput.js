import React from 'react';


import classes from './SearchInput.module.css';

const searchInput = props => {

    return (
        <div className={classes.SearchInput}>
            <p style={{fontSize: '1.3rem'}}>Εισάγετε την μέγιστη απόσταση από το λιμάνι (km)</p>
            <input type="number"
                   placeholder="Απόσταση..."
                   min="0"
                   onChange={(event) => props.changed(event.target.valueAsNumber)}
                   style={{fontSize: '1.2rem', textAlign: 'center'}}/>
            <button disabled={props.disabled}
                    className={classes.ContinueButton}
                    onClick={props.clicked}>
                Αναζήτηση πλοίων
            </button>
        </div>
    );
}

export default searchInput;