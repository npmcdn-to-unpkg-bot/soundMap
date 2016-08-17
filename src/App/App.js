import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundMap from '../SoundMap/SoundMap'
import SoundList from '../SoundList/SoundList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedSound: 0,
      currentZoom: 17
    }
    this.updateSelected = this.updateSelected.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
  }

  updateSelected(val) {
    console.log('App - selectedSound', val)
    this.setState({selectedSound: val})
  }

  updateZoom(val) {
    console.log('App - zoom level', val)
  }

  render() {
    const sound = this.props.data[this.state.selectedSound]
    const getSoundId = (snd) => snd.uri.substring(34)
    return (
      <div className="App">
        <Header
          soundId={getSoundId(sound)} />
        <SoundMap
          zoom={this.state.currentZoom}
          sounds={this.props.data}
          onClick={this.updateSelected}
          updateZoom={this.updateZoom}
          {...this.state} />
        <SoundList
          sounds={this.props.data}
          onClick={this.updateSelected}
          {...this.state} />
      </div>
    )
  }
}

export default App
