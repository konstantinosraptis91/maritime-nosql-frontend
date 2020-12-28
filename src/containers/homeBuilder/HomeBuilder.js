import React, {Component} from 'react';
import Home from '../../components/Home/home';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Cockpit from '../../components/Home/Cockpit/Cockpit';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

class HomeBuilder extends Component {

    render () {

        return (
            <Auxiliary>
                <Cockpit/>
                <Home/>
            </Auxiliary>
        );
    }
}

export default HomeBuilder;