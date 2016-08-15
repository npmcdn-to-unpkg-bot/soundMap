import React, { Component } from 'react'
import './SoundList.css'

const ListItem = (props) =>
  <li key={props.id} className='Lista-Item'>
    <img className='Lista-Item-Avatar' src={props.artwork_url} alt='artwork' />
    <div className='Lista-userInfo'>
      <div id='user'>{props.userName}</div>
      <div id='title'>{props.title}</div>
    </div>
  </li>

class SoundList extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    console.log('e')
  }

  render() {
    return(
      <ul className='Lista-main'>
        {this.props.sounds.map(sound =>
          <ListItem
            onClick={this.onClick}
            key={sound.id}
            id={sound.id}
            artwork_url={sound.artwork_url}
            userName={sound.userName}
            title={sound.title}
          />)}
      </ul>
    )
  }
}

export default SoundList
