import React from 'react';
import classes from './HomeBlock.module.css';
/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */


const homeBlock = props => {
    const reverseOrder = props.reverse ? {flexDirection: 'row-reverse'}: null;

    return (
        <section className={classes.HomeBlock} style={reverseOrder}>
            <img src={props.imgPath} alt={props.imgDesc}/>
            <div className={classes.Block}>
                <h2 className={classes.Header}>{props.bockTitle}</h2>
                <p className={classes.Context}>{props.bockContext}</p>
            </div>
        </section>
    );
}

export default homeBlock;