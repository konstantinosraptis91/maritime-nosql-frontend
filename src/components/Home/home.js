import React from 'react';
import HomeBlock from './HomeBlock/HomeBlock';
import blockContext from "../../assets/statics/homeContext";
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 22/12/2020.
 */

const homeBlocks = blockContext.map((block, index) => {
    return (
        <HomeBlock key={index}
                   path={block.path}
                   bockTitle={block.title}
                   bockContext={block.description}
                   reverse={index % 2 !== 0}
                   imgPath={block.imgPath}
                   imgDesc={block.imgDescription}/>
    );
});

const home = () => (
    <Auxiliary>
        {homeBlocks}
    </Auxiliary>
);

export default home;