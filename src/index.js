import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import tracks from './assets/data/tracks.json'
import './index.css'

ReactDOM.render(
  <App data={tracks} />,
  document.getElementById('root')
);

/*
import Player from './Player/Player.js'
const id = '235266599'
const urlBase = 'https://api.soundcloud.com/tracks/'

ReactDOM.render(
  <Player
  resolveUrl={urlBase + id}
  clientId={'5646c69be299b7297f6b389a5b996453'}
  />,
  document.getElementById('root')
)
*/
