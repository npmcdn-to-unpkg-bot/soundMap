import React from 'react'
import './SoundInfo.css'

const SoundInfo = (props) => {
  const fullDesc = props.description
  const desc = fullDesc.slice(fullDesc.search('Opis') + 5, fullDesc.search('Rekorder'))
  return(
    <div className='SoundInfo'>
      {desc}
    </div>
  )
}

export default SoundInfo
