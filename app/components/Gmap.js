var React = require('react');

var GMap = React.createClass({

  // initialize local variables
  getInitialState: function() {
    return {
      map : null,
      markers : []
    };
  },

  // set some default values
  getDefaultProps: function() {
    return {
      latitude: 0,
      longitude: 0,
      zoom: 18,
      width: "100%",
      height: "100%",
      selected: 0,
      points: [],
      gmaps_api_key: 'AIzaSyB716Z75hweX4zTmbs93Wf1EUiN5a8BIAI',
      gmaps_sensor: false
    };
  },
  //click handler
  handleMarkerClick: function(i,e) {
    this.props.onClick(i);
  },
  
  updateZoom: function (newZoom) {
    this.state.map.setZoom(newZoom);
  },

  updateCenter: function(newLat, newLon){
    var newCenter = new google.maps.LatLng(newLat, newLon)
    this.state.map.setCenter(newCenter);
  },
  
  // update geo-encoded markers
  updateMarkers : function(points) {

    var markers = this.state.markers;
    var map = this.state.map;
    
    // map may not be loaded when parent component re-renders
    if(map === null) { return false; }
    
    // remove everything
    markers.forEach( function(marker) {
      marker.setMap(null);
    } );

    this.state.markers = [];

    // add new markers
    points.map( function( point,i ) {
      var location = new google.maps.LatLng(point.latitude , point.longitude);
      var marker = new google.maps.Marker({
                                    position: location,
                                    animation: point.animation,
                                    map: map });

      //add click listener
      google.maps.event.addListener(marker, 'click', this.handleMarkerClick.bind(null,i));
      
      //center map on clicked Sound - marker
      if(point.animation === 1){
        this.updateCenter(point.latitude,point.longitude);
      }

      //add marker
      markers.push( marker );

    },this );

    this.setState( { markers : markers } );

  },

  render : function() {

    var style = {
      width: this.props.width || "100%",
      height: this.props.height || "100%"
    };

    return (
      <div style={style}></div>
    );
  },

  componentDidMount : function() {
    var createMap = (function() {
      var mapOptions = {
        zoom: this.props.zoom,
        center: new google.maps.LatLng( this.props.latitude , this.props.longitude ),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0
      };

      var map = new google.maps.Map( this.getDOMNode(), mapOptions);

      this.setState( { map : map } );
      this.updateMarkers(this.props.points);
    }).bind(this);

    if (typeof google !== 'undefined') {
      // scripts already loaded, create map immediately
      createMap();
    } else {
      if (!window.reactMapCallback) {
        // if this is the first time, load the scripts:
        var s =document.createElement('script');
        s.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.props.gmaps_api_key + '&sensor=' + this.props.gmaps_sensor + '&callback=reactMapCallback';
        document.head.appendChild( s );
        
        // when the script has loaded, run all the callbacks
        window.reactMapCallbacks = [];
        window.reactMapCallback = function(){
          while (window.reactMapCallbacks.length > 0)
            (window.reactMapCallbacks.shift())() ;// remove from front
        };
      }

      // add a callback to the end of the chain
      window.reactMapCallbacks.push(createMap);
    }
  },

  // update markers if needed
  componentWillReceiveProps : function(props) {
    if( props.points ) this.updateMarkers(props.points);
  }

});

module.exports = GMap;