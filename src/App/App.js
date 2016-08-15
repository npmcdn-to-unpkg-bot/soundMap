import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundMap from '../SoundMap/SoundMap'
import SoundList from '../SoundList/SoundList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSound: 28
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({selectedSound: 111})
  }

  render() {
    const sound = this.props.data[this.state.selectedSound]
    const getSoundId = (snd) => snd.uri.substring(34)
    return (
      <div className="App">
        <Header soundId={getSoundId(sound)} />
        <SoundMap sounds={this.props.data} />
        <SoundList sounds={this.props.data} onClick={this.handleClick} />
      </div>
    )
  }
}

export default App
