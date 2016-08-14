import React, { Component } from 'react'
import {Gmaps, Marker} from 'react-gmaps'

const center = {
  lat: 51.108962,
  lng: 16.980229
}

class SoundMap extends Component {
  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: false,
      mapTypeId: 'satellite',
      streetViewControl: true,
      tilt: 0
    })
  }

  onClick (e, props) {
    console.log(e.latLng.lat(), e.latLng.lng(), props)
  }

  render () {
    const getGps = (track) => {
      const gps = track.description.split('\n')[2]
      const lat = gps.slice(gps.search(':') + 1, gps.search(',')).trim()
      const lng = gps.slice(gps.search(',') + 1).trim()
      return {
        lat: lat,
        lng: lng
      }
    }

    const markerFromTrack = (track) => {
      const c = getGps(track)
      return <Marker
        key={track.id}
        lat={c.lat}
        lng={c.lng}
        name={track.title}
        draggable={false}
        onClick={this.onClick}
      />
    }

    return (
      <Gmaps
        width={'100%'}
        style={{position: 'absolute', top: '102px', right: '505px', bottom: 0}}
        lat={center.lat}
        lng={center.lng}
        zoom={13}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>
        {this.props.sounds.map(markerFromTrack)}
      </Gmaps>
    )
  }
}

export default SoundMap
