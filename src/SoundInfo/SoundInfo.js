import React from 'react'
import './SoundInfo.css'

const SoundInfo = (props) => {
  const fullDesc = props.description.split('\n')
  const getOnly = (key) => (item) => item.toLowerCase().search(key) !== -1
  const loc = fullDesc.filter(getOnly('lokalizacja'))
  const data = fullDesc.filter(getOnly('data'))
  const czas = fullDesc.filter(getOnly('czas'))
  const descr = fullDesc.filter(getOnly('opis'))
  const gear = fullDesc.filter(getOnly('rekorder'))

  return(
    <div className='SoundInfo'>
      {loc}
      <hr />
      {data}
      <hr />
      {czas}
      <hr />
      {descr}
      <hr />
      {gear}
    </div>
  )
}

export default SoundInfo
