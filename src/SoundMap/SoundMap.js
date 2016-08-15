import React, { Component } from 'react'
import {Gmaps, Marker} from 'react-gmaps'

const wroclaw = {
  lat: 51.108187,
  lng: 16.985593
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
        style={{position: 'absolute', top: '75px', right: '505px', bottom: 0}}
        lat={wroclaw.lat}
        lng={wroclaw.lng}
        zoom={13}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>
        {this.props.sounds.map(markerFromTrack)}
      </Gmaps>
    )
  }
}

export default SoundMap
