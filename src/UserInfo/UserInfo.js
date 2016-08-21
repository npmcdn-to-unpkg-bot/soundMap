import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    return(
      <div className={this.props.style}>
        <div id='user'>{this.props.userName}</div>
        <div id='title' className='truncate'>{this.props.title}</div>
      </div>
    )
  }
}

export default UserInfo
