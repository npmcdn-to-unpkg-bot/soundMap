import React, { Component } from 'react'

class SoundList extends Component {
  render () {
    const makeListItem = (item) =>
      <li key={item.id} className='listItem'>
        <img className='listAvatar' src={item.artwork_url} alt='artwork' />
        <div className='userInfo'>
          <div id='user'>{item.userName}</div>
          <div id='title'>{item.title}</div>
        </div>
      </li>

    return (
      <ul className='Lista'>
        {this.props.sounds.map(makeListItem)}
      </ul>
    )
  }
}

export default SoundList
