import React from 'react';
import DefaultContentList from './defaults/DefaultContentList';

function Title(props){
    return <DefaultContentList pathname={props.location.pathname} path={props.location.pathname} title="Title List"/>
}

export default Title