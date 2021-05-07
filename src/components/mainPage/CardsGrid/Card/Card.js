import React, { useEffect, useState } from 'react'
import classes from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({ id, listIndex, images, title }) => {  
  const [cls, setCls] = useState([classes.Card])
  // const [width, setWidth] = useState(window.innerWidth)

  // let cls = [classes.Card]

  // if ( window.innerWidth > 576 && (listIndex === 3 || listIndex === 9)) {
  //   cls.push(classes["Card--extended"])
  // } else {
  //   cls.filter(current => current !== classes["Card--extended"])
  // }

  useEffect(() => {
    function updateClasses() {
      if ( window.innerWidth > 576 && (listIndex === 3 || listIndex === 9)) {
        if(cls.includes(classes["Card--extended"])) return 

        setCls([...cls, classes["Card--extended"]])
      } else {
        setCls(cls.filter(currentClass => currentClass !== classes["Card--extended"]))
      }
    }
    
    updateClasses()

    window.addEventListener('resize', updateClasses)

    return () => window.removeEventListener('resize', updateClasses);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavLink to={`/recipie/${id}`} className={cls.join(' ')}>
      <h3 className={classes.CardTitle}>{title}</h3>
      <img className={classes.CardImage} src={images[images.length - 1].slug} alt="PECIPIE" />
    </NavLink>
  )
}

export default Card