import React from 'react'
import classes from './Step.module.css'

const Step = ({ index, step }) => {
  return (
    <div className={classes.Step}>
      <p className={classes.StepIndex}>{index}</p>
      <p className={classes.StepText}>{step.text.trim()}</p>
    </div>
  )
}

export default Step