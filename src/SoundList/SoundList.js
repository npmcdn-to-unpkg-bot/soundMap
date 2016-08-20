import React, { Component } from 'react'
import Player from '../Player/Player'
import './SoundList.css'

class SoundList extends Component {

  handleClick(index, event) {
    this.props.onClick(index)
  }

  soundToListItem(sound, index, arr) {
    const id = this.props.sounds[this.props.selectedSound].id
    const urlBase = 'https://api.soundcloud.com/tracks/'

    const soundString =
      [ sound.title
      , sound.userName
      ,sound.description
      ].join('\n').toLowerCase()

    const containsFilteredText =
      soundString.search(this.props.filter) !== -1

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
          {this.props.selectedSound === index
            ? <Player
                resolveUrl={urlBase + id}
                clientId={'5646c69be299b7297f6b389a5b996453'}
              />
            : null}
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
