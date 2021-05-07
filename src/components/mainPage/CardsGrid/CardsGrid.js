import React from 'react'
import Card from './Card/Card'
import classes from './CardsGrid.module.css'

const CardsGrid = props => {
  return (
    <div className={classes.CardsGrid}>
      { props.recipies.map((recipie, listIndex) => <Card key={recipie.id} listIndex={listIndex} {...recipie} /> ) }
    </div>
  )
}

export default CardsGrid