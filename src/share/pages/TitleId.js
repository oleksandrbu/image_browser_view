import React from 'react';

import DefaultDescriptionPage from './defaults/DefaultDescriptionPage';

function TitleId(props){
    return <DefaultDescriptionPage pathname={props.location.pathname} pathToList="/character" title="Character List"/>
}

export default TitleId