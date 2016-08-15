import React, { Component } from 'react'
import Header from '../Header/Header'
import SoundMap from '../SoundMap/SoundMap'
import SoundList from '../SoundList/SoundList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SoundMap sounds={this.props.data}/>
        <SoundList sounds={this.props.data} />
      </div>
    )
  }
}

export default App
