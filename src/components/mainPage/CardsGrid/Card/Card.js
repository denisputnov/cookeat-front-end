import React from 'react'
import classes from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({ id, listIndex, images, title }) => {
  let cls = [classes.Card]
  if ( window.innerWidth > 576 && (listIndex === 3 || listIndex === 9)) cls.push(classes["Card--extended"])
  return (
    <NavLink to={`/recipie/${id}`} className={cls.join(' ')}>
      <h3 className={classes.CardTitle}>{title}</h3>
      <img className={classes.CardImage} src={images[images.length - 1].slug} alt="PECIPIE" />
    </NavLink>
  )
}

export default Card