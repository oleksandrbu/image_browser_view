import React from 'react';
import DefaultContentList from './defaults/DefaultContentList';

function Character(props){
    return <DefaultContentList pathname={props.location.pathname} path={props.location.pathname} title="Character List"/>
}

export default Character