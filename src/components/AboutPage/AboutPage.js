import React, {useState, useEffect } from 'react'
import Card from './Card/Card'
import classes from './AboutPage.module.css'

import { motion } from 'framer-motion'
import { slideAnimationConfig } from '../../animation/animationConfig'

const AboutPage = props => {
  const [cardsContent, setCardsContent] = useState([])

  useEffect(() => {
    setCardsContent([
      {name: "Denis Putnov", avatar: "https://avatars.githubusercontent.com/u/58640700?v=4", skills: ["Native JavaScript", "React & Redux", "Vue.js", "HTML5 & SASS/SCSS", "Node.js", "Python", "Design", "Flutter/Dart"]},
      {name: "Ekaterina Tarasova", avatar: "https://avatars.githubusercontent.com/u/61863469?v=4", skills: ["Flutter/Dart", "Android/Java", "Mobile Developing", "Python", "Design"]},
      {name: "Daniel Сherednichenko", avatar: "https://avatars.githubusercontent.com/u/61076867?v=4", skills: ["Python", "Machine Learning & Data Science", "NLP", "Kotlin", "Flutter/Dart", "Mobile Developing"]},
    ])
  }, [])

  return (
    <motion.div className={classes.AboutPage} {...slideAnimationConfig} >
      <h1>Наша команда: </h1>
      <div className={classes.CardsWrapper} >
        { cardsContent.map((person, index) => <Card key={person.name} { ...person } duration={0.3 * ( index + 1 )} />) } 
      </div>
    </motion.div>
  )
}

export default AboutPage