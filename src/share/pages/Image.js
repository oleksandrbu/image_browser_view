import React from 'react';
import DefaultImageList from './defaults/DefaultImageList';

function Image(props){
    return <DefaultImageList path={props.location.pathname}/>
}

export default Image