import { motion } from "framer-motion";
import StyledShuffleSelector from 'Styles/styledComponents/StyledShuffleSelector';


interface IProps {
  children: string;
}

// animate: whilehover, have text decoration underline and color at 1 opacity, 
// when not hovering, color 0.8 value and underline. layoutId= selectors



const ShuffleSelector = ({ children }: IProps) => {
  return (
    <StyledShuffleSelector>{ children }</StyledShuffleSelector>
  )
}

export default ShuffleSelector;