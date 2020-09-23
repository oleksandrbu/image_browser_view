import React from 'react';
import DefaultImageList from './defaults/DefaultImageList';

function TitleIdImages(props){
    return <DefaultImageList path={props.location.pathname}/>
}

export default TitleIdImages
