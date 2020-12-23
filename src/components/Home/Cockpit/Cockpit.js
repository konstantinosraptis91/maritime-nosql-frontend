import React from 'react';
import headerImg from '../../../assets/images/header.jpg';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */
const headerStyle = {
    background: `url(${headerImg}) repeat local right top / cover`,
    padding: '15rem 2rem 5rem 2rem',
    textAlign: 'center',
    lineHeight: '1.5',
    fontSize: '2rem',
    color: 'white'
}

const cockpit = () => (
    <div style={headerStyle}
    ><em>Central to Naval</em></div>
);

export default cockpit;