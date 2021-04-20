import React, { Fragment } from 'react'
import Ingredient from './Ingredient/Ingredient';

const Ingredients = ({ ingredients }) => {

  console.log(ingredients);
  return (
   <Fragment>
      { ingredients.map(ingredient => ( 
        <Ingredient 
          key={`${ingredient.name}-${ingredient.quantity}`} 
          title={ingredient.name} 
          quantity={ingredient.quantity} 
        />
      )) }
   </Fragment>
  )
}

export default Ingredients