var React = require('react');

var Sound = React.createClass({
  _onSelectClick: function() {
    this.props.onSelectClick();
  },
  render: function() {
    //console.log('Sound: ', this.state);
    
    var selectedClass = function(isSelected, isHoveredOver) {
      if ((isSelected && isHoveredOver) || isSelected) {
        return 'row selected';
      }
      if ( isHoveredOver ) {
        return 'row hovered';
      }
      return 'row';
    };
    
    return (
      <div id={"Snd"+this.props.number} onClick={this._onSelectClick}>
        <div id="Sound" className={selectedClass(this.props.isSelected, this.props.isHoveredOver)}
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
