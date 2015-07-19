/** @jsx React.DOM */

var React = require('react');
var info = require('../data/groupInfo.json');
var tracks = require('../data/tracksList.json');
var SoundList = require('./SoundList.js');
var Sound = require('./Sound.js');
var MyMap = require('./MyMap.js');
var SoundCloud = require('react-soundcloud-widget');

var ReactApp = React.createClass({
    
  getInitialState: function() {
    return {
      hoveredItem: null,
      selectedItem: 0,
      playingItem: null,
      isPlaying: false,
      info: info,
      tracks: tracks
    };
  },
  _handleHover: function(val) {
    var newState = this.state;
    newState.hoveredItem = val;
    this.replaceState(newState);
  },
  _handleSelect: function(val) {
    var newState = this.state;
    newState.selectedItem = val;
    this.replaceState(newState);
  },
  _handlePlay: function(val) {
    if(!this.state.isPlaying) {
      var newState = this.state;
      newState.isPlaying = true;
      newState.playingItem = val;
      this.replaceState(newState);
    } else {
      var newState = this.state;
      newState.isPlaying = false;
      newState.playingItem = null;
      this.replaceState(newState);
    }
  },
  _onClick: function(val) {
    var newState = this.state;
    newState.selectedItem = val;
    this.replaceState(newState);
  },
  render: function() {
    return(
      <div>
        <SoundList 
          handleHover={this._handleHover}
          handleSelect={this._handleSelect}
          handlePlay={this._handlePlay}
          isPlaying={this.state.isPlaying}
          selectedSound={this.state.selectedItem}
          playingSound={this.state.playingItem}
          hoveredSound={this.state.hoveredItem}
          tracks={this.state.tracks}/>
        <MyMap
          tracks={this.state.tracks}
          selectedMarker={this.state.selectedItem}
          onClick={this._onClick}/>
        <div id="Player">
          <SoundCloud 
            url={tracks[this.state.selectedItem].stream_url}/>
        </div>
        <div id="Info">
        INFOOOO
        </div>
      </div>
    );
  }
});

module.exports = ReactApp;