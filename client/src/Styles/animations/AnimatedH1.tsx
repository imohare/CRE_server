import StyledH1  from "Styles/styledComponents/styledH1"
import { motion, AnimatePresence } from 'framer-motion';

import { letterContainerVariants, letterVariants } from "./h1Animations";


interface IProps {
  children: string;
}

const AnimatedH1 = ({ children }: IProps) => {
  return (
    <AnimatePresence>
   { children && (
    <StyledH1
      variants={letterContainerVariants}
      initial={"before"}
      animate={"after"}
      exit={"before"}
      key={children}
      aria-label={children}>
          {children.split(" ").map((word: string, wordI: number) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: "inline-block"
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span key={`${index}-${letter}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto"
                  }}
                  variants={letterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              {'\u00A0'}</div>
          ))}
    </StyledH1>
  )
}
</AnimatePresence>
  )}

export default AnimatedH1