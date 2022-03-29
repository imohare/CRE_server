import { motion } from 'framer-motion';
import { truncate } from 'fs';

const cardVariants = {
  offscreen: {
    x: 0
  },
  onscreen: {
    x: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5
    }
  }
};


interface IProps { 
  children: React.ReactNode;
}

const AnimatedCard = ({ children}: IProps) => {
  return (
    <motion.div
      className="card-container"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
    { children }
    </motion.div>
  )
}

export default AnimatedCard;