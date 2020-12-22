import React from 'react';
import HomeBlock from './HomeBlock/HomeBlock';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */


const home = () => (
  <div>
      <HomeBlock/>
      <HomeBlock reverse={true}/>
  </div>
);

export default home;