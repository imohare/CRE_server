import { motion, useViewportScroll, useTransform } from 'framer-motion';



type ParallaxProps = {
  children: React.ReactNode
}

const Parallax = ({ children }: ParallaxProps) => {

  const { scrollY } = useViewportScroll()

  // const y = useTransform(scrollY, [100, 200], [0, 500])

  return (
    <motion.div >
      {/* { console.log('y value is', y)} */}
      {children}
    </motion.div>)
}

export default Parallax
