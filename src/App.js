import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Connection from "./Connection"
import Header from "./components/Header/Header"
import ImageList from "./components/ImageList/ImageList"

const path = [
  "/image"
]

function App (){
  const [images, setImages] = useState([])

  function imagelist(path){
    let connection = new Connection(path)
    connection.get().then(list => setImages(list))
  }

  return (
    <>
      <Header/>
      <main className="main">
        <Switch>
          <Route exact path={path[0]}>
            {imagelist(path[0])}
            <ImageList images={images} path={path[0]}/>
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App;
