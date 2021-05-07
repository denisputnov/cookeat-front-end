import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

import Logo from './cookeat-logo.png'

const Header = props => {

  const headerRef = useRef(null)

  useEffect(() => {
    let lastScrollTop = 0

    const onScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop 
      
      if (st > lastScrollTop && lastScrollTop > 80) {
        // if user enough far away from top border (80 px)
        // when scroll down 
        headerRef.current.classList.add(classes.HeaderHidden)
      } else {
        // when scroll up
        if (lastScrollTop < 80) {
          // if user is too near by top border 
          headerRef.current.classList.remove(classes.HeaderHidden)
        } else {
          // if user is far away from top border 
          setTimeout(() => headerRef.current.classList.remove(classes.HeaderHidden), 300)
        }
      }

      lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={headerRef} className={classes.Header}>
      <NavLink to="/" className={classes.Logo} activeClassName="">
        <div className={classes.LogoImageWrapper}>
          <img src={Logo} alt="Logo" className={classes.LogoImage} />
        </div>
        <span className={classes.LogoText}>cookeat</span>
      </NavLink>
      <button onClick={props.openSearch} className={classes.SearchButton} />
    </header>
  )
}

export default Header