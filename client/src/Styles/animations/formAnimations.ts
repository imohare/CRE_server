const StaggerParentVariant = {
  show: {
    transition: {
      staggerChildren: 0.3,
    }
  }
}
const StaggerItemVariant = {
  hidden: {
    opacity: 0,
    y: '-50',
    x: '150px'
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'ease'
    }
  }
}

export { StaggerParentVariant, StaggerItemVariant };