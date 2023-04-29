import React from 'react'
import classes from './Button.module.scss'

function Button({name, className,onClick}) {
  return (
    <button onClick={onClick} className= {classes.mainBtn + ' ' + className}>{name}</button>
  )
}

export default Button