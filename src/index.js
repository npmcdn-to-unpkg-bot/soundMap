import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tracks from './data/tracks.json'
import './index.css';

ReactDOM.render(
  <App data={tracks} />,
  document.getElementById('root')
);