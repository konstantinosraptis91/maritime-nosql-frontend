import React from 'react';

import classes from './Info.module.css';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 9/1/2021.
 */


const info = props => {

    return (
        <div className={classes.Info}>
            <section>
                home page section
            </section>
            <section>
                <div>
                    student section
                </div>
                <div>
                    teacher section
                </div>
            </section>
        </div>

    );
}

export default info;

