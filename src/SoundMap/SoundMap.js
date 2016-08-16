import React, { Component } from 'react'
import {Gmaps, Marker} from 'react-gmaps'

class SoundMap extends Component {
  onMapCreated (map) {
    map.setOptions({
      disableDefaultUI: false,
      mapTypeId: 'satellite',
      streetViewControl: true,
      tilt: 0
    })
  }

  onMarkerClick(index) {
    this.props.onClick(index)
  }

  render () {
    const getGps = (track) => {
      const desc = track.description
      const lines = desc.split('\n')
      const gps = lines.filter((line) => line.search('GPS') !== -1)[0]
      const lat = gps.slice(gps.search(':') + 1, gps.search(',')).trim()
      const lng = gps.slice(gps.search(',') + 1).trim()
      return {
        lat: lat,
        lng: lng
      }
    }

    return (
      <Gmaps
        width={'100%'}
        style={{position: 'absolute', top: '75px', right: '250px', bottom: 0}}
        lat={getGps(this.props.sounds[this.props.selectedSound]).lat}
        lng={getGps(this.props.sounds[this.props.selectedSound]).lng}
        zoom={this.props.zoom}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>
        {this.props.sounds.map((sound, index, array) => {
          const c = getGps(sound)
          return <Marker
            animation={(this.props.selectedSound === index) ? 1 : 0}
            key={sound.id}
            lat={c.lat}
            lng={c.lng}
            name={sound.title}
            draggable={false}
            onClick={this.onMarkerClick.bind(this, index)}
          />
        })}
      </Gmaps>
    )
  }
}

export default SoundMap
