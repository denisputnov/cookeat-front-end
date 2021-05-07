import React from 'react'
import classes from './CookieLoading.module.css'

import Cookie from './cookies.png'

const CookieLoading = ({ show }) => {
  const cls = [classes.CookieLoading]
  if (!show) cls.push(classes.None)
  return (
    <div className={cls.join(' ')}>
      <img src={Cookie} className={classes.CookieImage} alt="loading" />
    </div>
  )
}

export default CookieLoading