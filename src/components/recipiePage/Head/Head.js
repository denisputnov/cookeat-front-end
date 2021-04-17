import React from 'react'
import classes from './Head.module.css'
import { NavLink } from 'react-router-dom'

const Head = ({ image }) => {
  return (
    <div className={classes.Head}>
      <NavLink to="/" className={classes.Exit} />
      <img className={classes.HeadImage} src={image} alt="Header" />
    </div>
  )
}

export default Head