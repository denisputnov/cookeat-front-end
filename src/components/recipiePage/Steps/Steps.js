import React from 'react'
import classes from './Steps.module.css'

import Step from './Step/Step'

const Steps = ({ steps }) => {
  return (
    <div className={classes.Steps}>
      { steps.map((step, index) => <Step key={`${index+1}-step`} index={index + 1} step={step} /> ) }
    </div>
  )
}

export default Steps