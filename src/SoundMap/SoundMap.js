import React, { Component } from 'react'
import {Gmaps, Marker} from 'react-gmaps'
import './SoundMap.css'

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

  handleZoomChange() {
    this.props.updateZoom(this.refs.mapa.getMap().zoom)
  }

  render () {
    const getGps = (sound) => {
      const lines = sound.description.split('\n')
      const gps = lines.filter((line) => line.search('GPS') !== -1)[0]
      const lat = gps.slice(gps.search(':') + 1, gps.search(',')).trim()
      const lng = gps.slice(gps.search(',') + 1).trim()
      return {
        lat: lat,
        lng: lng
      }
    }

    return (
      <div className='mapContainer xs-hide'>
        <Gmaps
          ref={'mapa'}
          width={'100%'}
          height={'100%'}
          lat={getGps(this.props.sounds[this.props.selectedSound]).lat}
          lng={getGps(this.props.sounds[this.props.selectedSound]).lng}
          zoom={this.props.zoom || 17}
          params={{v: '3.exp', key: 'YOUR_API_KEY'}}
          onMapCreated={this.onMapCreated}
          onZoomChanged={this.handleZoomChange.bind(this)}>
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
      </div>
    )
  }
}

export default SoundMap
