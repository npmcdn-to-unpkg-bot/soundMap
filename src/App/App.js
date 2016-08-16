import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundMap from '../SoundMap/SoundMap'
import SoundList from '../SoundList/SoundList'

const wroclaw = {
  lat: 51.108187,
  lng: 16.985593
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedSound: 28
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(val) {
    this.setState({selectedSound: val})
  }

  render() {
    const sound = this.props.data[this.state.selectedSound]
    const getSoundId = (snd) => snd.uri.substring(34)
    return (
      <div className="App">
        <Header soundId={getSoundId(sound)} />
        <SoundMap sounds={this.props.data} lat={wroclaw.lat} lng={wroclaw.lng}/>
        <SoundList sounds={this.props.data} onClick={this.handleClick} />
      </div>
    )
  }
}

export default App
