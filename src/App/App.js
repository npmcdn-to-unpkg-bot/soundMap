import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundInfo from '../SoundInfo/SoundInfo'
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
    this.onFilter = this.onFilter.bind(this)
  }

  handleMarkerClick(val) {
    const currentSound = document.getElementById('snd' + val)
    currentSound.scrollIntoView()
    this.setState({selectedSound: val})
  }

  handleListClick(val) {
    this.setState({selectedSound: val})
  }

  onFilter(val) {
    this.setState({filter: val})
  }

  render() {
    const sound = this.props.data[this.state.selectedSound]
    const getSoundId = (snd) => snd.uri.substring(34)
    return (
      <div className="App">
        <Header
          onFilter={this.onFilter}
          soundId={getSoundId(sound)} />
        <SoundInfo description={sound.description} />
        <SoundMap
          zoom={this.state.zoom}
          sounds={this.props.data}
          onClick={this.handleMarkerClick}
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
