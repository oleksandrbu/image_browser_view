import React from 'react';
import DefaultImageList from './defaults/DefaultImageList';

function CharacterIdImages(props){
    return <DefaultImageList path={props.location.pathname}/>
}

export default CharacterIdImages