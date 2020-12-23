import React from 'react';
import privacy from '../../../../assets/statics/privacyPolicy';

const style = {
    listStyleType: 'upper-roman'
}

const privacyPolicy = () => (
    <ol style={style}>
        {privacy.map(ctx => (

            <li>
                <h4>{ctx.header}</h4>
                <p>{ctx.content}</p>
            </li>

        ))}
    </ol>
);

export default privacyPolicy;