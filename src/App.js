import React from 'react';
import Layout from './hoc/Layout/Layout';
import HomeBuilder from "./containers/homeBuilder/HomeBuilder";

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

function App() {
  return (
    <div>
      <Layout>
        <HomeBuilder />
      </Layout>
    </div>
  );
}

export default App;
