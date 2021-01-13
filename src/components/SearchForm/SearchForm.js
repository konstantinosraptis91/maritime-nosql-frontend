import React, {Component} from 'react';
import axios from '../../axios-maritime';

import SearchList from './SearchList/SearchList';
import Spinner from '../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import classes from './SearchForm.module.css';

class SearchForm extends Component {
    _isMounted = false;

    state = {
        vesselTypes: null,
        countries: null,
        loading: true,

    }

    componentDidMount() {
        this._isMounted = true;
         // axios get for countries and vessel types to generate state arrays
        this.setState({loading: true});
        axios.get(`/vessels/types`)
            .then(response => {
                let types = [{code: '', name: 'all'}];
                response.data.map(vessel => (
                    types.push({
                        code: vessel,
                        name: vessel
                    })
                ));
                axios.get(`/countries`)
                    .then(response => {
                        const countries = [{code: '', name: 'all'}, ...response.data];
                        this.setState({
                            vesselTypes: types,
                            countries: countries,
                            loading: false
                    });
                });
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className={classes.SearchForm}>
                {/*<h4>Φίλτρα Αναζήτησης</h4>*/}
                {this.state.loading ?
                    <Spinner/> :
                    <SearchList typesName="vessel-types"
                                typesId="type"
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

export default withErrorHandler(SearchForm, axios);