import React from 'react'
import './SoundInfo.css'

const SoundInfo = (props) => {
  const fullDesc = props.description
  const loc = fullDesc.slice(fullDesc.search('Lokalizacja') + 12, fullDesc.search('GPS'))
  const data = fullDesc.slice(fullDesc.search('Data'), fullDesc.search('Czas'))
  const czas = fullDesc.slice(fullDesc.search('Czas'), fullDesc.search('Długość'))
  const descr = fullDesc.slice(fullDesc.search('Opis') + 5, fullDesc.search('Rekorder'))
  const gear = fullDesc.slice(fullDesc.search('Rekorder'), fullDesc.search('Autor'))
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
