import React from 'react'
import classes from './Ingredient.module.css'

const Ingredient = ({ title, quantity }) => {
  return (
    <div className={classes.Ingredient}>
      <p>{title}</p>
      <p>{quantity}</p>
    </div>
  )
} 

export default Ingredient