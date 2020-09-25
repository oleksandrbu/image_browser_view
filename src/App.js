import './App.css';

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from "./share/components/Header/Header"
import Image from "./share/pages/Image"
import TitleIdImages from './share/pages/TitleIdImages.js';
import CharacterIdImages from './share/pages/CharacterIdImages.js';
import ImageId from './share/pages/ImageId.js';
import Title from './share/pages/Title.js';
import Character from './share/pages/Character.js';
import TitleId from './share/pages/TitleId.js';
import CharacterId from './share/pages/CharacterId';
import AsideSearch from './share/pages/AsideSearch'
import ImageResult from './share/pages/ImageResult';

function App (history){
  return (
    <>
      <Header/>
      <AsideSearch/>
      <main className="main">
        <Switch>
          <Route exact path="/image" component={Image}/>
          <Route exact path="/title/:id/images" component={TitleIdImages}/>
          <Route exact path="/character/:id/images" component={CharacterIdImages}/>
          <Route exact path="/image/:id" component={ImageId}/>
          <Route exact path="/title" component={Title}/>
          <Route exact path="/character" component={Character}/>
          <Route exact path="/title/:id" component={TitleId}/>
          <Route exact path="/character/:id" component={CharacterId}/>
          <Route path="/search" component={ImageResult}/>
        </Switch>
      </main>
    </>
  )
} 

export default withRouter(App);
