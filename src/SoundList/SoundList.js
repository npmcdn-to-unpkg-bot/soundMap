import React, { Component } from 'react'
import './SoundList.css'

class SoundList extends Component {
  render() {
    return(
      <ol className='Lista-main'>
        {this.props.sounds.map((item, index) =>
          <li key={index} className='Lista-Item' onClick={this.handleClick}>
            <img className='Lista-Item-Avatar' src={item.artwork_url} alt='artwork' />
            <div className='Lista-userInfo'>
              <div id='user'>{item.userName}</div>
              <div id='title'>{item.title}</div>
            </div>
          </li>
        )}
      </ol>
    )
  }
}

export default SoundList
