import React, {Component} from 'react';
import axios from '../../axios-maritime';

import SearchList from './SearchList/SearchList';
import Spinner from '../UI/Spinner/Spinner';

import classes from './SearchForm.module.css';

class SearchForm extends Component {

    state = {
        vesselTypes: null,
        countries: ['France', 'United Kingdom of Great Britain and Northern Ireland'],
        loading: true,

    }

    componentDidMount() {
        //  axios get for countries and vessel types to generate state arrays
        this.setState({loading: true});
        axios.get(`/vessels/shiptypes`)
            .then(response => {
                const vesselTypes = ['all', ...response.data];
                this.setState({vesselTypes: vesselTypes, loading: false});
            });
    }

    // changeHandler = () => {
    //     console.log('form log');
    //
    // }

    render() {
        return (
            <div className={classes.SearchForm}>
                <h4>Φίλτρα Αναζήτησης</h4>
                {this.state.loading ?
                    <Spinner/> :
                    <SearchList typesName="vessel-types"
                                typesId="shiptype"
                                typesTitle="Τύπος Πλοίου: "
                                typesOptions={this.state.vesselTypes}
                                changed={this.props.changed}
                    />
                }
                {this.state.loading ?
                    <Spinner/> :
                    <SearchList typesName="country"
                                typesId="country"
                                typesTitle="Σημαία Πλοίου: "
                                typesOptions={this.state.countries}
                                changed={this.props.changed}
                    />
                }
            </div>
        );
    }
}

export default SearchForm;