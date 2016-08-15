import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = () =>
  <div className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h2 className= 'App-title'>Dźwiękowa mapa Wrocławia</h2>
    <iframe
      id='player'
      width='100%'
      height='20'
      scrolling='no'
      frameborder='no'
      src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271963666&amp;color=ff9900&amp;inverse=false&amp;auto_play=false&amp;show_user=true'>
    </iframe>
  </div>

export default Header
