import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Connection from "./Connection"
import Header from "./components/Header/Header"
import ImageList from "./components/ImageList/ImageList"
import ContentList from "./components/ContentList/ContentList"
import ImageSheet from "./components/ImageSheet/ImageSheet"

function App (props){
  const paths = [
    "/image",
    "/title",
    "/character",
    "/title/:id/images",
    "/character/:id/images",
    "/image/:id"
  ]

  const [currentPath, setCurrentPath] = useState('/')
  const [image, setImage] = useState({})
  const [images, setImages] = useState([])
  const [elements, setElements] = useState([])

  function changePath(newPath){
    if (newPath != currentPath) setCurrentPath(newPath)
  }

  useEffect(() => {
    // image
    if (currentPath == paths[0]){
      imageList(paths[0]); 
    }
    // image/id
    if (RegExp(paths[0]+'/\\d*').test(currentPath)){
      loadImage(currentPath); 
    }
    // title
    if (currentPath == paths[1]){
      elementList(paths[1])
    }
    // title/id/images
    if (RegExp(paths[1]+'/\\d*'+'/images').test(currentPath)){
      imageList(currentPath);   
    }
    // character
    if (currentPath == paths[2]){
      elementList(paths[2])
    }
    // character/id/images
    if (RegExp(paths[2]+'/\\d*'+'/images').test(currentPath)){
      imageList(currentPath);   
    }
  }, [currentPath])

  function loadImage(path){
    let connection = new Connection(path)
    connection.get().then(image => {
      if (image != null) setImage(image)
    })
  }

  function imageList(path){
    let connection = new Connection(path)
    connection.get().then(list => setImages(list))
  }

  function elementList(path){
    let connection = new Connection(path)
    connection.get().then(list => setElements(list))
  }

  return (
    <>
      <Header/>
      <main className="main">
        <Switch>
          <Route exact path={paths[0]} render={() => {
            changePath(paths[0])
            return <ImageList images={images} path={paths[0]}/>
          }}/>
          <Route exact path={paths[5]} render={({location}) => {
            changePath(location.pathname)
            return <ImageSheet image={image}/>
          }}/>
          <Route exact path={paths[1]} render={() => {
            changePath(paths[1])
            return <ContentList elements={elements} path={paths[1]} header="Title List"/>
          }}/>
          <Route exact path={paths[3]} render={({location}) => {
            changePath(location.pathname)
            return <ImageList images={images} path={location.pathname}/>
          }}/>
          <Route exact path={paths[2]} render={() => {
            changePath(paths[2]) 
            return <ContentList elements={elements} path={paths[2]} header="Character List"/>
          }}/>
          <Route exact path={paths[4]} render={({location}) => {
            changePath(location.pathname)
            return <ImageList images={images} path={location.pathname}/>
          }}/>
        </Switch>
      </main>
    </>
  )
} 

export default App;
