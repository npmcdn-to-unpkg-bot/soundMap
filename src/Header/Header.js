import React from 'react'
import Player from '../Player/Player'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = (props) => {
  const id = props.soundId
  const urlBase = 'https://api.soundcloud.com/tracks/'

  return (
    <div className='App-header clearfix'>
      <img src={logo} className='App-logo left ml2 mt1 xs-hide' alt='logo' />
      <h1 className='App-title h2 inline-block sm-hide xs-hide'>Dźwiękowa mapa Wrocławia</h1>
      <div className='right inline-block m2'>
        <input className='searchBox' type="text" name="search" placeholder="Search..."></input>
      </div>

      <Player
        resolveUrl={urlBase + id}
        clientId={'5646c69be299b7297f6b389a5b996453'} />
    </div>
  )
}
export default Header
