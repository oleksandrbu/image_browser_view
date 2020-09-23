import React from 'react';

import DefaultDescriptionPage from './defaults/DefaultDescriptionPage';

function CharacterId(props){
    return <DefaultDescriptionPage pathname={props.location.pathname} pathToList="/title" title="Title List"/>
}

export default CharacterId