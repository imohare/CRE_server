import { motion } from 'framer-motion';

interface IProps{
  children: React.ReactNode;
}

const transitionVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    delay: 1.5,
  duration: 1.5},
  exit: {
    opacity: 0,
  transition: {ease: 'easeInOut'}}
}

const Transitions = ({ children }: IProps) => {
  return (
    <motion.div
    variants={ transitionVariant}
    initial="initial"
    animate="animate"
    exit="exit"
    > {children}
    </motion.div>
  )
}

export default Transitions;