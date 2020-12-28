import React, {Component} from 'react';
import axios from '../../axios-maritime';

import Vessel from '../../components/Vessel/Vessel';

class Vessels extends Component {

    render() {

        return (
            <div>
                <Vessel/>
                <Vessel/>
                <Vessel/>
            </div>
        );
    }
}

export default Vessels;
