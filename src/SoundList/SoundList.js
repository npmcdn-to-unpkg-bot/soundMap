import React, { Component } from 'react'
import './SoundList.css'

class SoundList extends Component {
  constructor(props) {
    super(props)
    this.soundToListItem = this.soundToListItem.bind(this)
  }

  handleClick(e) {
    console.log(e.currentTarget)
  }

  soundToListItem(sound, index, arr) {
    return (
      <li key={index} ref={'sound' + index} className='Lista-Item' onClick={this.handleClick}>
        <img className='Lista-Item-Avatar' src={sound.artwork_url} alt='artwork' />
        <div className='Lista-userInfo'>
          <div id='user'>{sound.userName}</div>
          <div id='title'>{sound.title}</div>
        </div>
      </li>
    )
  }

  render() {
    return(
      <ol className='Lista-main'>
        {this.props.sounds.map(this.soundToListItem)}
      </ol>
    )
  }

}

export default SoundList
