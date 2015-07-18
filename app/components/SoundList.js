var React = require('react')
var Sound = require('./Sound.js')
/////////////////////////////////////////
var SoundList = React.createClass({
  _onItemMouseOver: function(i,event){
    this.props.handleHover(i);
  },
  _onItemMouseOut: function(i,event){
    this.props.handleHover(null);
  },
  _onPlayClick: function(i) {
    this.props.handlePlay(i);
  },
  _onSelectClick: function(i) {
    this.props.handleSelect(i);
  },
  render: function(){
    //console.log('SoundList - props: ', this.props);
    var items = [];
    for (var i = 0; i < this.props.tracks.length; i++) {
      var track = this.props.tracks[i];
      items.push(
        <div key={i} className="row">
          <Sound 
            key={i}
            ref={"sound" + i}
            number={i}
            title={track.title}
            artwork_url={track.artwork_url}
            waveform_url={track.waveform_url}
            description={track.description}
            isSelected={this.props.selectedSound === i}
            isHoveredOver={this.props.hoveredSound === i}
            isPlaying={this.props.playingSound === i}
            playingSound={this.props.playingSound}
            onMouseEnter={this._onItemMouseOver.bind(null,i)}
            onMouseLeave={this._onItemMouseOut.bind(null,i)}
            onPlayClick={this._onPlayClick.bind(null,i)}
            onSelectClick={this._onSelectClick.bind(null,i)}>
          </Sound>
        </div>
      );
    }
    return (
      <div id="SoundList">
        {items}
      </div>
    );
  }
});

module.exports = SoundList;