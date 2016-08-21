import React, { Component } from 'react'
import Player from '../Player/Player'
import logo from '../assets/logo.svg'
import './Header.css'

class Header extends Component {
  setFilter(e) {
    e.preventDefault()
    this.props.onFilter(e.target.value.toLowerCase())
  }

  render() {
    const id = this.props.soundId
    const urlBase = 'https://api.soundcloud.com/tracks/'

    return (
      <div className='App-header clearfix'>
        <img
          src={logo}
          className='App-logo left'
          alt='logo'
        />
        <h1 className='App-title h2 inline-block sm-hide xs-hide'>
          Dźwiękowa mapa Wrocławia
        </h1>
        <div className='right inline-block m2 xs-hide'>
          <input
            className='searchBox'
            type='text'
            name='search'
            placeholder='Search...'
            onChange={this.setFilter.bind(this)}>
          </input>
        </div>

        <Player
          userName={this.props.userName}
          title={this.props.title}
          resolveUrl={urlBase + id}
          clientId={'5646c69be299b7297f6b389a5b996453'}
        />
      </div>
    )
  }
}

export default Header
