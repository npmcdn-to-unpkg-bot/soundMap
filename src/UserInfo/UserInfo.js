import React from 'react'

const UserInfo = (props) => {
  return(
    <div className={props.style}>
      <div id='user'>{props.userName}</div>
      <div id='title' className='truncate'>{props.title}</div>
    </div>
  )
}

export default UserInfo
