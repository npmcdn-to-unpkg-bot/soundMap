var React = require('react');

///////////////////////////////////////////
var Sound = React.createClass({
  getInitialState: function() {
    return {
      displayInfo: false
    };
  },
  _onInfoClick: function() {
    this.setState({
      displayInfo: !this.state.displayInfo
    });
  },
  _onPlayClick: function() {
    this.props.onPlayClick();
  },
  _onSelectClick: function() {
    this.props.onSelectClick();
  },
  render: function() {
    //console.log('Sound: ', this.state);
    var infoClass = this.props.isSelected ? "infoShow" : "infoHide";
    var playing_bool = this.props.isPlaying;
    var playText = playing_bool ? "stop" : "play";
    var waveClass = playing_bool ? "waveform-show" : "waveform-hide";
    var playStyle = {
        backgroundColor: playing_bool ? "#FFC800" : ""
    };
    var selectedClass;
    
    if (this.props.isSelected && this.props.isHoveredOver)  {
      selectedClass = "row selected";
    } else if (this.props.isSelected) {
      selectedClass = "row selected";
    } else if (this.props.isHoveredOver) {
      selectedClass = "row hovered";
    } else {
      selectedClass = "row";
    }
    
    return (
      <div id={"Snd"+this.props.number} onClick={this._onSelectClick}>            
        <div id="Sound" className={selectedClass}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}>
          <img 
            className="imgButton" 
            src={this.props.artwork_url}
            alt="artwork">
          </img>
          <h6 className="title"> 
            {this.props.title}
          </h6>

          <a 
            className="button myButton"
            href="#"
            onClick={this._onPlayClick}
            style={playStyle}>
            {playText}
          </a>
          <img 
            className={waveClass}
            src={this.props.waveform_url}
            alt="waveform">
          </img>
        </div>
        <div className={infoClass}>
          <p className="desc">
            {this.props.description}
          </p>
        </div>
    </div>
    );
  }
});

module.exports = Sound;