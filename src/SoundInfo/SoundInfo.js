import React from 'react'
import InfoButton from '../InfoButton/InfoButton'
import './SoundInfo.css'

const SoundInfo = (props) => {
  const fullDesc = props.description.split('\n')
  const getOnly = (key) => (item) => item.toLowerCase().search(key) !== -1
  const loc = fullDesc.filter(getOnly('lokalizacja'))[0]
  const data = fullDesc.filter(getOnly('data'))[0]
  const czas = fullDesc.filter(getOnly('czas'))[0]
  const gear = fullDesc.filter(getOnly('rekorder'))[0]
  const descr = fullDesc.filter(getOnly('opis'))[0]
  return(
    <div className='SoundInfo'>
      <InfoButton onClick={props.handleInfoClick.bind(this)} />
      <div className={props.long ? 'hide' : ''}>
        <p>{loc}</p>
        <p>{data}</p>
        <p>{czas || 'Czas:'}</p>
        <p>{gear}</p>
      </div>
      <div className={props.long ? 'long' : 'hide'}>
        <p>{descr}</p>
      </div>
    </div>
  )
}

export default SoundInfo
