import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import tracks from './assets/data/tracks.json'
import './index.css'

ReactDOM.render(
  <App data={tracks} />,
  document.getElementById('root')
);
