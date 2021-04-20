import React from 'react'
import Ingredient from './Ingredient/Ingredient';
import classes from './Ingredients.module.css'

const Ingredients = ({ ingredients }) => {
  return (
   <div className={classes.IngredientsWrapper}>
      { ingredients.map(ingredient => ( 
        <Ingredient 
          key={`${ingredient.name}-${ingredient.quantity}`} 
          title={ingredient.name} 
          quantity={ingredient.quantity} 
        />
      )) }
   </div>
  )
}

export default Ingredients