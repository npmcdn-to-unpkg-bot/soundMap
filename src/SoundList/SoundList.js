import React from 'react'
import './SoundList.css'

const ListItem = (props) =>
  <li key={props.id} className='Lista-Item'>
    <img className='Lista-Item-Avatar' src={props.artwork_url} alt='artwork' />
    <div className='Lista-userInfo'>
      <div id='user'>{props.userName}</div>
      <div id='title'>{props.title}</div>
    </div>
  </li>

const SoundList = (props) => (
  <ul className='Lista-main'>
    {props.sounds.map(item =>
      <ListItem
        key={item.id}
        id={item.id}
        artwork_url={item.artwork_url}
        userName={item.userName}
        title={item.title}
      />)}
  </ul>
)

export default SoundList
