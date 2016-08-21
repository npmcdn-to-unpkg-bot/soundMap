import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundMap from '../SoundMap/SoundMap'
import SoundList from '../SoundList/SoundList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedSound: 0,
      zoom: 17,
      filter: ''
    }
    this.handleListClick = this.handleListClick.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
    this.updateZoom = this.updateZoom.bind(this)
    this.onFilter = this.onFilter.bind(this)
  }

  handleMarkerClick(val) {
    console.log('App - selectedSound', val)
    const currentSound = document.getElementById('snd' + val)
    currentSound.scrollIntoView()
    this.setState({selectedSound: val})
  }

  handleListClick(val) {
    console.log('App - selectedSound', val)
    this.setState({selectedSound: val})
  }

  updateZoom(val) {
    console.log('App - zoom level', val)
  }

  onFilter(val) {
    console.log(val)
    this.setState({filter: val})
  }

  render() {
    const sound = this.props.data[this.state.selectedSound]
    const getSoundId = (snd) => snd.uri.substring(34)
    return (
      <div className="App">
        <Header
          userName={sound.userName}
          title={sound.title}
          onFilter={this.onFilter}
          soundId={getSoundId(sound)} />
        <SoundMap
          zoom={this.state.zoom}
          sounds={this.props.data}
          onClick={this.handleMarkerClick}
          updateZoom={this.updateZoom}
          {...this.state} />
        <SoundList
          filter={this.state.filter}
          sounds={this.props.data}
          onClick={this.handleListClick}
          {...this.state} />
      </div>
    )
  }
}

export default App
