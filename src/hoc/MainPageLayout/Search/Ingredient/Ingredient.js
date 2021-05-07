import React from 'react'
import classes from './Ingredient.module.css'

const Ingredient = ({ ingredient, choosen, onChoose }) => {
  const cls = [classes.Ingredient]

  if (choosen) cls.push(classes.Choosen)

  return (
    <button className={cls.join(' ')} onClick={onChoose.bind(this, ingredient)}>
      <div className={classes.IngredientAvatar}>
        <p>{ ingredient.charAt(0) }</p>
      </div>
      <p className={classes.IngredientName}>{ ingredient }</p>
    </button>
  )
}

export default Ingredient