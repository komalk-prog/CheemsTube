import React from 'react'
import Button from './Button'

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