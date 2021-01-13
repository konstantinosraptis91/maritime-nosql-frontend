import React, {Component} from 'react';
import axios from '../../axios-maritime';

import SearchList from './SearchList/SearchList';
import Spinner from '../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import classes from './SearchForm.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 2/1/2021.
 */

class SearchForm extends Component {
    _isMounted = false;

    state = {
        countries: null,
        loading: true,

    }

    componentDidMount() {
        this._isMounted = true;
        // axios get for countries and vessel types to generate state arrays
        this.setState({loading: true});
        axios.get(`/countries`)
            .then(response => {
                const countries = [{code: '', name: 'all'}, ...response.data];
                this.setState({
                    countries: countries,
                    loading: false
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
                    <SearchList typesName="country"
                                typesId="country"
                                typesTitle="Χώρα Λιμανιού: "
                                typesOptions={this.state.countries}
                                changed={this.props.changed}
                    />
                }
            </div>
        );
    }
}

export default withErrorHandler(SearchForm, axios);