import React, { Component } from 'react'
import logo from './logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {message: 'Dźwiękowa Mapa Wrocławia'}
    this.headerClick = this.headerClick.bind(this)
  }

  headerClick(e) {
    this.setState({message: '-= Welcome everybody to the California City =-'})
  }

  render() {
    return (
      <div onClick={this.headerClick} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default Header
