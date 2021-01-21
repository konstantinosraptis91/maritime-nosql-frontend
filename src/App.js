import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomeBuilder from './containers/homeBuilder/HomeBuilder';
import NearVessels from './containers/NearVessels/NearVessels';
import NearPorts from './containers/NearPorts/NearPorts';
import Spinner from './components/UI/Spinner/Spinner';

//  lazy loading added to routing in order to improve performance - Stavros Lamprinos on 10/1/2021
const Info = React.lazy(() => import('./components/Info/Info'));
const Keplergl = React.lazy(() => import('./containers/Keplergl/Keplergl'));
const Vessels = React.lazy(() => import('./containers/Vessels/Vessels'));
const VesselInfo = React.lazy(() => import('./containers/VesselInfo/VesselInfo'));
const Ports = React.lazy(() => import('./containers/Ports/Ports'));


/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomeBuilder}/>
                    <Route path="/vessels/vessel-info/:id" render={(props) => (
                        <Suspense fallback={<Spinner/>}>
                            <VesselInfo {...props}/>
                        </Suspense>
                    )}/>
                    <Route path="/vessels/ports/near/mmsi/:mmsi/dist/:dist" component={NearPorts}/>
                    <Route path="/vessels/trajectory/keplergl/mmsi/:mmsi" render={() => (
                        <Suspense fallback={<Spinner/>}>
                            <Keplergl/>
                        </Suspense>
                    )}/>
                    <Route path="/vessels" render={(props) => (
                        <Suspense fallback={<Spinner/>}>
                            <Vessels {...props}/>
                        </Suspense>
                    )}/>
                    <Route path="/ports/vessels/near/lon/:lon/lat/:lat/dist/:dist" component={NearVessels}/>
                    <Route path="/ports" render={(props) => (
                        <Suspense fallback={<Spinner/>}>
                            <Ports {...props}/>
                        </Suspense>
                    )}/>
                    <Route path="/info" render={() => (
                        <Suspense fallback={<Spinner/>}>
                            <Info/>
                        </Suspense>
                    )}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
