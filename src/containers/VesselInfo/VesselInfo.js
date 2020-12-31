import React, {Component} from 'react';
import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import VesselInfoSummary from '../../components/VesselInfoSummary/VesselInfoSummary';
import VesselInfoVoyage from '../../components/VesselInfoSummary/VesselIfoVoyage/VesselInfoVoyage';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */


class VesselInfo extends Component {

    state = {
        vessel: null,
        loading: false
    }

    componentDidMount() {
        //  to top when the page loads
        this.topRequestHandler();
        this.setState({loading: true});
        axios.get(`/vessels/mmsi/${this.props.match.params.id}`)
            .then(response => {
                this.setState({vessel: response.data, loading: false});
            });
    }

    topRequestHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    trajectoryContinueHandler = mmsi => {
        alert(`Page with trajectory info on map for ship with mmsi: ${mmsi} coming soon!!!`);
    }


    render() {
        const vessel = this.state.vessel ?
            <Auxiliary>
                <VesselInfoSummary vessel={this.state.vessel}
                                   trajectoryContinue={() => this.trajectoryContinueHandler(this.state.vessel.mmsi)}/>
                {this.state.vessel.voyages.map((voyage, index) => (
                    <VesselInfoVoyage key={index}
                                      voyage={voyage}/>
                ))}
            </Auxiliary>
             :
            <Spinner/>;


        return (
            <Auxiliary>
                {vessel}
            </Auxiliary>

        );
    }
}

export default withErrorHandler(VesselInfo, axios);