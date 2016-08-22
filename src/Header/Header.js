import React, { Component } from 'react'
import Player from '../Player/Player'
import logo from '../assets/logo.svg'
import './Header.css'

const AppTitle =
  (props) =>
    <h1 className={props.styles}>
      {props.title}
    </h1>

const AppLogo =
  (props) =>
    <img
      src={props.imgSrc}
      className={props.styles}
      alt='logo'
    />

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
        <AppLogo
          styles={'App-logo left'}
          imgSrc={logo}
        />
        <AppTitle
          title='Dźwiękowa Mapa Wrocławia'
          styles='App-title inline-block mb0 sm-hide'
        />
        <div className='right inline-block m2'>
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
