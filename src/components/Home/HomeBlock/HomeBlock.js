import React from 'react';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const style = {
    display: 'flex',
    justifyContent: 'space-around'
}

const homeBlock = props => {
    const reverseOrder = props.reverse ? {...style, flexDirection: 'row-reverse'}: style
    return (
        <section style={reverseOrder}>
            <div>picture</div>
            <div>link and article</div>
        </section>
    );
}

export default homeBlock;