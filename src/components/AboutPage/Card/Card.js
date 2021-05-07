import React from 'react'
import { motion } from 'framer-motion'
import { aboutCardSlideAnimationConfig } from '../../../animation/animationConfig'

import classes from './Card.module.css'

const Card = ({ name, avatar, skills, duration }) => {
  return (
    <motion.div className={classes.Card} {...aboutCardSlideAnimationConfig} transition={{ duration }}>
      <div>
        <img 
          className={classes.Avatar}
          src={avatar} 
          alt={`${name}'s avatar`} 
        />
      </div>
      <h3 className={classes.Name} >{name}</h3>
      <ul className={classes.Skills}>
        { skills.map(skill => ( <li key={skill} className={classes.SkillItem}>{skill}</li> )) }
      </ul>
    </motion.div>
  )
}

export default Card