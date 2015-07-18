var React = require('react');

///////////////////////////////////////////
var Sound = React.createClass({
  _onPlayClick: function() {
    this.props.onPlayClick();
  },
  _onSelectClick: function() {
    this.props.onSelectClick();
  },
  render: function() {
    //console.log('Sound: ', this.state);
    
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
          <h5 className="title">
            {this.props.title}
          </h5>
        </div>
    </div>
    );
  }
});

module.exports = Sound;
