import React, { PropTypes, Component } from 'react'
import { SoundPlayerContainer } from 'react-soundplayer/addons'
import { PlayButton, Timer, Progress } from 'react-soundplayer/components'
import UserInfo from '../UserInfo/UserInfo'
import './Player.css'

class Player extends Component {
  render() {
    let { track, currentTime, duration } = this.props;
    return (
      <div className='player'>
        <PlayButton
          className='player-button left'
          {...this.props}
        />
        <Timer
          className='player-timer right'
          duration={track ? track.duration / 1000 : 0}
          currentTime={currentTime}
          {...this.props}
        />
        <UserInfo
          style={'player-userInfo left ml1'}
          title={track ? track.title : 'loading title...'}
          userName={track ? track.user.username : 'loading user name...'}
          {...this.props}
        />
        <Progress
            className='rounded player-progress'
            innerClassName='rounded inner'
            value={(currentTime / duration) * 100 || 0}
            {...this.props}
        />
      </div>
    )
  }
}

class BasicSoundPlayer extends Component {
  render() {
    return (
      <SoundPlayerContainer {...this.props}>
        <Player />
      </SoundPlayerContainer>
    )
  }
}

BasicSoundPlayer.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default BasicSoundPlayer
