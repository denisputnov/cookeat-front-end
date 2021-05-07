const pageTransition = {
  in: {
    opacity: 1,
    x: 0
  }, 
  out: {
    opacity: 0,
    x: "-100%"
  }
}

const slidePageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: { 
    opacity: 0,
    y: "-5%",
  }
}

export const animationConfig = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: pageTransition,
  transition: {
    duration: 0.1,
  }
}

export const slideAnimationConfig = {
  ...animationConfig,
  initial: "out",
  variants: slidePageTransition,
  transition: {
    ...animationConfig.transition,
    duration: 0.3,
  }
}

const aboutCardTransition = {
  in: {
    opacity: 1,
    y: 0
  }, 
  out: {
    opacity: 0,
    y: "-10%"
  }
}

export const aboutCardSlideAnimationConfig = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: aboutCardTransition,
}