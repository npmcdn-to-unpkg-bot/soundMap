import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

class Header extends Component {
  setFilter(e) {
    e.preventDefault()
    this.props.onFilter(e.target.value.toLowerCase())
  }

  render() {
    return (
      <div className='App-header clearfix'>
        <img
          src={logo}
          className='App-logo left ml2 mt1'
          alt='logo'
        />
        <h1 className='App-title h2 inline-block sm-hide xs-hide'>
          Dźwiękowa mapa Wrocławia
        </h1>
        <div className='right inline-block m2'>
          <input
            className='searchBox'
            type='text'
            name='search'
            placeholder='Search...'
            onChange={this.setFilter.bind(this)}>
          </input>
        </div>
      </div>
    )
  }
}

export default Header
