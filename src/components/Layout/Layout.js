import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

import classes from './Layout.module.css';

const layout = props => (
    <Auxiliary>
        <div>Toolbar, SideBar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
            <p>4 blocks with img and text, linking to each page</p>
        </main>
    </Auxiliary>
);

export default layout;