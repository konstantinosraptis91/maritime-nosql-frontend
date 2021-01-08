import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomeBuilder from "./containers/homeBuilder/HomeBuilder";
import Vessels from './containers/Vessels/Vessels';
import VesselInfo from './containers/VesselInfo/VesselInfo';
import Ports from './containers/Ports/Ports';
import NearVessels from './containers/NearVessels/NearVessels';
import NearPorts from './containers/NearPorts/NearPorts';
import Keplergl from './containers/Keplergl/Keplergl';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomeBuilder}/>
                    <Route path="/vessels/vessel-info/:id" component={VesselInfo}/>
                    <Route path="/vessels/ports/near/dist/:dist" component={NearPorts}/>
                    <Route path="/vessels/trajectory/keplergl/mmsi/:mmsi" component={Keplergl}/>
                    <Route path="/vessels" component={Vessels}/>
                    <Route path="/ports/vessels/near/lon/:lon/lat/:lat/dist/:dist" component={NearVessels}/>
                    <Route path="/ports" component={Ports}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
