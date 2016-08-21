import React, { Component } from 'react'
import './SoundList.css'

class SoundList extends Component {

  handleClick(index, event) {
    this.props.onClick(index)
  }

  soundToListItem(sound, index, arr) {
    const soundString = sound.title + ' ' + sound.userName + ' ' +
      sound.description

    const containsFilteredText =
      soundString.toLowerCase().search(this.props.filter) !== -1

    return (
      containsFilteredText
      ? <li
          className={this.props.selectedSound === index
            ? 'Lista-Item Item-seleted'
            : 'Lista-Item'}
          key={index}
          id={'snd' + index}
          onClick={this.handleClick.bind(this,index)}>
          <img
            className='Lista-Item-Avatar'
            src={sound.artwork_url}
            alt='artwork'>
          </img>
          <div className='Lista-userInfo'>
            <div id='user'>{sound.userName}</div>
            <div id='title'>{sound.title}</div>
          </div>
        </li>
      : null
    )
  }

  render() {
    return(
      <ol className='Lista-main'>
        {this.props.sounds.map(this.soundToListItem.bind(this))}
      </ol>
    )
  }
}

export default SoundList
