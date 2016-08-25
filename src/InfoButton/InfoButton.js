import React from 'react'
import './InfoButton.css'

const InfoButton = (props) => {
  return(
    <button className='InfoButton' onClick={props.onClick.bind(this)}>i</button>
  )
}

export default InfoButton
