import React from 'react'
import classes from './Title.module.scss'
function Title({name, className}) {
  return (
    <div className={classes.title + ' ' + className}>{name}</div>
  )
}

export default Title