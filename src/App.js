import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomeBuilder from "./containers/homeBuilder/HomeBuilder";
import Vessels from './containers/Vessels/Vessels';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomeBuilder}/>
                    <Route path="/vessels" component={Vessels}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
