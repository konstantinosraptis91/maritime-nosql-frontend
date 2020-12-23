import React from 'react';
import classes from './HomeBlock.module.css';
/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const style = {
    display: 'flex',
    justifyContent: 'space-around'
};

const homeBlock = props => {
    const reverseOrder = props.reverse ? {...style, flexDirection: 'row-reverse'}: style;

    return (
        <section className={classes.HomeBlock} style={reverseOrder}>
            <img src={props.imgPath} alt={props.imgDesc}/>
            <div>
                <h4>{props.bockTitle}</h4>
                <p>{props.bockContext}</p>
            </div>
        </section>
    );
}

export default homeBlock;