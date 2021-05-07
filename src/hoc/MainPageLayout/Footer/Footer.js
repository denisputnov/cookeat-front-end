import React from 'react'
import classes from './Footer.module.css'

const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterCeil}>
        <p className={classes.CeilHeader}>Какой-то загоовок</p>
        <a className={classes.CeilLink}>Ссылка</a>
        <a className={classes.CeilLink}>Ссылка</a>
        <a className={classes.CeilLink}>Ссылка</a>
        <a className={classes.CeilLink}>Ссылка</a>
      </div>
      <div className={classes.FooterCeil}>2</div>
      <div className={classes.FooterCeil}>3</div>
    </footer>
  )
}

export default Footer