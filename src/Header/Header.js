import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = (props) => {
  const id=props.soundId
  const soundSource = 'https://w.soundcloud.com/player/?url=api.soundcloud.com/tracks/' + id + '&amp;color=ff9900'

  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2 className='App-title'>Dźwiękowa mapa Wrocławia</h2>
      <iframe
        id='player'
        width='100%'
        height='20'
        src={soundSource}>
      </iframe>
    </div>
  )
}
export default Header
