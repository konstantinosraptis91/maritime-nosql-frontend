import React, {Component} from 'react';
import axios from '../../axios-maritime';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import VesselInfoSummary from '../../components/VesselInfoSummary/VesselInfoSummary';
import VesselInfoVoyage from '../../components/VesselInfoSummary/VesselIfoVoyage/VesselInfoVoyage';
import VesselInfoCockpit from '../../components/VesselInfoSummary/VesselInfoCockpit/VesselInfoCockpit';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 28/12/2020.
 */


class VesselInfo extends Component {
    _isMounted = false;

    state = {
        vessel: null,
        loading: false,
        staticContent: true
    }

    componentDidMount() {
        this._isMounted = true;
        //  to top when the page loads
        this.topRequestHandler();
        this.setState({loading: true});
        axios.get(`/vessels/mmsi/${this.props.match.params.id}`)
            .then(response => {
                this.setState({vessel: response.data, loading: false});
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    topRequestHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    trajectoryContinueHandler = mmsi => {
        alert(`Page with trajectory info on map for ship with mmsi: ${mmsi} coming soon!!!`);
    }

    staticShowHandler = () => {
        this.setState({staticContent: true});
    }

    dynamicShowHandler = () => {
        this.setState({staticContent: false});
    }


    render() {
        const style = {
            textAlign: 'center',
            lineHeight: '2rem'
        };

        return this.state.vessel ?
            <Auxiliary>
                <VesselInfoSummary vessel={this.state.vessel}
                                   trajectoryContinue={() => this.trajectoryContinueHandler(this.state.vessel.mmsi)}
                                   staticType={this.state.staticContent}/>
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
                    </div>
                }
            </Auxiliary>
            :
            <Spinner/>;
    }
}

export default withErrorHandler(VesselInfo, axios);