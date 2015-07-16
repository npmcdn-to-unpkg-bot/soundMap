var React = require('react/addons');
var GMap = require('./Gmap.js');

var MyMap = React.createClass({
  getInitialState: function(){
    return {
      Center: {
        lat: 51.107187,
        lng: 17.072008
      },
      selectedMarker: 0,
      zoom: 18
    };
  },
  getGps: function(track) {
    var gps = track.description.split('\n')[2];
    var lat = gps.slice(gps.search(':') + 1, gps.search(',')).trim();
    var lng = gps.slice(gps.search(',') + 1).trim();
    return {
        lat: lat,
        lng: lng
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var mark = nextProps.selectedMarker;
    var coords = this.getGps(nextProps.tracks[mark]);
    this.setState({Center:{lat:coords.lat,lng:coords.lng},selectedMarker: mark});
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    var mark = nextProps.selectedMarker;
    var coords = this.getGps(nextProps.tracks[mark]);
    if (this.state.Center.lat === coords.lat && this.state.Center.lng === coords.lng) {
      return false;
    } else {
      return true;
    }
  },
  onClick: function(i) {
    this.props.onClick(i);
    var div = document.getElementById("Snd"+i)
    div.scrollIntoView(true);
  },
  render : function() {
    
    var points = this.props.tracks.map(function(track,i){
      return {
        latitude: this.getGps(track).lat,
        longitude: this.getGps(track).lng,
        animation: (this.state.selectedMarker === i) ? 1 : 0
      };
    },this);
    
    return(
      <div id="Map">
        GPS: {this.state.Center.lat}-{this.state.Center.lng} - selected: {this.state.selectedMarker}
        <GMap 
          latitude={this.state.Center.lat}
          longitude={this.state.Center.lng}
          selected={this.state.selectedMarker}
          zoom={this.state.zoom}
          width={"100%"}
          height={"100%"}
          points={points}
          onClick={this.onClick}/>
      </div>
    );
  }
});

module.exports = MyMap;