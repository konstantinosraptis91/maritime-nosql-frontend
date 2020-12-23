import React from 'react';
import papeiImg from "../../../assets/images/papeiLogo.png";

const style = {
    padding: '8px',
    height: '100%',
    boxSizing: 'border-box'
}


const papeiLogo = () => (
    <div style={style}>
        <a href="https://www.ds.unipi.gr/"
           target="_blank"
           rel="noreferrer">
            <img src={papeiImg} alt="Logo of University of Piraeus"/>
        </a>
    </div>
);

export default papeiLogo;