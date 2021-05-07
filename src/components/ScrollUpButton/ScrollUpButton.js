import React, { Component, createRef } from 'react'
import classes from './ScrollUpButton.module.css'

class ScrollUpButton extends Component {

  buttonRef = createRef()

  handleScroll = (e) => {
    if (window.scrollY > 700) {
      this.buttonRef.current.classList.add(classes.ScrollUpButtonShow)
    } else {
      this.buttonRef.current.classList.remove(classes.ScrollUpButtonShow)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  scrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setTimeout(() => {
      this.buttonRef.current.blur()
    }, 500);
  }

  render() {
    return (
      <button 
        ref={this.buttonRef}
        className={classes.ScrollUpButton}
        onClick={this.scrollUp}
      />
    )
  }
}

export default ScrollUpButton
