import React, {Component} from 'react';

import SearchList from './SearchList/SearchList';

import classes from './SearchForm.module.css';

class SearchForm extends Component {

    state = {
        //  dummy data
        vesselTypes: ['Passenger', 'Other', 'Fishing'],
        countries: ['France', 'United Kingdom of Great Britain and Northern Ireland'],
        loading: false,

    }

    componentDidMount() {
        //  axios get for countries and vessel types to generate state arrays
    }

    changeHandler = () => {
        console.log('form log');

    }

    render() {

        return (
            <div className={classes.SearchForm}>
                <h4>Φίλτρα Αναζήτησης</h4>
                <SearchList typesName="vessel-types"
                            typesId="shiptype"
                            typesOptions={this.state.vesselTypes}
                            countryName="country"
                            countryId="country"
                            countryOptions={this.state.countries}
                            changed={this.props.changed}
                            />
            </div>

        );
    }
}

export default SearchForm;