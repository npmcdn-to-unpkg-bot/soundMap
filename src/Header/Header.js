import React from 'react'
import Player from '../Player/Player'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = (props) => {
  const id = props.soundId
  const urlBase = 'https://api.soundcloud.com/tracks/'

  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>Dźwiękowa mapa Wrocławia</h1>
      <Player
        resolveUrl={urlBase + id}
        clientId={'5646c69be299b7297f6b389a5b996453'} />
    </div>
  )
}
export default Header
