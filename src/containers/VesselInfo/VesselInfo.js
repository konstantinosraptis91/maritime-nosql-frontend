import React, {Component} from 'react';
import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import VesselInfoSummary from '../../components/VesselInfoSummary/VesselInfoSummary';
import VesselInfoVoyage from '../../components/VesselInfoSummary/VesselIfoVoyage/VesselInfoVoyage';
import VesselInfoCockpit from '../../components/VesselInfoSummary/VesselInfoCockpit/VesselInfoCockpit';
import VesselTrajectory from '../../components/VesselTrajectory/VesselTrajectory';
import Modal from '../../components/UI/Modal/Modal';
import SearchInput from '../../components/SearchForm/SearchInput/SearchInput';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */


class VesselInfo extends Component {
    _isMounted = false;

    state = {
        vessel: null,
        trajectories: null,
        loading: false,
        loadTrajectories: false,
        staticContent: true,
        showDistance: false,
        distance: 0,
        searchable: false
    }

    componentDidMount() {
        this._isMounted = true;
        //  to top when the page loads
        this.topRequestHandler();
        this.setState({loading: true, loadTrajectories: true});
        axios.get(`/vessels/mmsi/${this.props.match.params.id}`)
            .then(response => {
                this.setState({vessel: response.data, loading: false});
            });

        //  concurrent loading of trajectories for the ship
        axios.get(`vessels/trajectory/mmsi/${this.props.match.params.id}`)
            .then(response => {
                this.setState({trajectories: response.data, loadTrajectories: false});
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    topRequestHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    trajectoryContinueHandler = mmsi => {
        this.props.history
            .push(`/vessels/trajectory/keplergl/mmsi/${mmsi}`);
    }

    staticShowHandler = () => {
        this.setState({staticContent: true});
    }

    dynamicShowHandler = () => {
        this.setState({staticContent: false});
    }

    distanceCancelHandler = () => {
        this.setState({showDistance: false});
    }

    distanceChangeHandler = dist => {
        this.setState({distance: dist, searchable: dist > 0});
    }

    distanceShowHandler = () => {
        this.setState({showDistance: true});
    }

    continueNearPortsHandler = () => {
        const distInKm = this.state.distance * 1000;
        this.props.history
            .push(`/vessels/ports/near/dist/${distInKm}`);
    }


    render() {
        const style = {
            textAlign: 'center',
            lineHeight: '2rem'
        };

        const distInput =
            <Modal show={this.state.showDistance}
                   closeModal={this.distanceCancelHandler}>
                <SearchInput disabled={!this.state.searchable}
                             changed={this.distanceChangeHandler}
                             clicked={this.continueNearPortsHandler}/>
            </Modal>;

        return this.state.vessel ?
            <Auxiliary>
                {distInput}
                <VesselInfoSummary vessel={this.state.vessel}
                                   trajectoryContinue={() => this.trajectoryContinueHandler(this.state.vessel.mmsi)}
                                   staticType={this.state.staticContent}
                                   nearPortsContinue={this.distanceShowHandler}/>
                <VesselInfoCockpit showStatic={this.staticShowHandler}
                                   showDynamic={this.dynamicShowHandler}
                                   activeBtn={this.state.staticContent}/>
                {this.state.staticContent ?
                    <div style={style}>
                        <h3>Αναλύονται τα ταξίδια του πλοίου σύμφωνα με τα στατικά δεδομένα που στάλθηκαν στο AIS</h3>
                        {this.state.vessel.voyages.map((voyage, index) => (
                            <VesselInfoVoyage key={index}
                                              voyage={voyage}/>
                        ))}
                    </div>
                    :
                    <div style={style}>
                        <h3>Λίστα με τα σημεία του πλοίου σύμφωνα με τα δυναμικά δεδομένα που στάλθηκαν στον AIS</h3>
                        <p style={{color: '#5f5c5c'}}>
                            Για κάθε πλοίο παραγματοποιήθηκε κανονικοποίηση σε 50 διαφορετικά στοιχεία
                            που περιλαμβάνουν μέσους όρους όλων των κοντινών τους σημείων
                        </p>
                        {this.state.trajectories ?
                            this.state.trajectories.map((tr, index) => (
                                <VesselTrajectory key={tr.mmsi + index}
                                                  trajectory={tr}/>
                            )) :
                            <Spinner/>}
                    </div>
                }
            </Auxiliary>
            :
            <Spinner/>;
    }
}

export default withErrorHandler(VesselInfo, axios);