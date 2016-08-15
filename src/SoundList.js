import React from 'react'

const ListItem = (props) =>
  <li key={props.id} className='listItem'>
    <div className='arrow-right'></div>
    <img className='listAvatar' src={props.artwork_url} alt='artwork' />
    <div className='userInfo'>
      <div id='user'>{props.userName}</div>
      <div id='title'>{props.title}</div>
    </div>
  </li>

const SoundList = (props) => (
  <ul className='Lista'>
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
