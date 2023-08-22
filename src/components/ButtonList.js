import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='button'>{name}</button>
    </div>
  )
}

const ButtonList = () => {
  return (
    <div className='buttonList'>
        <Button name="all"/>
        <Button name="news"/>    
        <Button name="cooking"/>    
        <Button name="horror"/>    
        <Button name="game"/>
        <Button name="Anime"/>
        <Button name="Computer Engineering"/>
        <Button name="scene"/> 
        <Button name="Sitcoms"/> 
        <Button name="Stand-up"/>
        <Button name="New to You"/>
    </div>
  )
}

export default ButtonList