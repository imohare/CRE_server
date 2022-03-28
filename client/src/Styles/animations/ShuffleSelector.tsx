import { NONAME } from "dns";
import { motion } from "framer-motion";
import StyledShuffleSelector from 'Styles/styledComponents/StyledShuffleSelector';



interface IProps {
  children: string;
  filterName: string;
  hoverOver: () => React.SetStateAction<void>;
}

// animate: whilehover, have text decoration underline and color at 1 opacity, 
// when not hovering, color 0.8 value and underline. layoutId= selectors

const ShuffleTagVariant = {
  initial: {
    textDecoration: 'none',
  },
  hoverEffect: {
    textDecoration: 'underline'
  }

}

const ShuffleSelector = ({ children, hoverOver, filterName }: IProps) => {
  return (
    <li>
    <StyledShuffleSelector
      // layoutId="underline"
      // initial="initial"
      // whileHover="hoverEffect"
      variants={ ShuffleTagVariant }
      >{children}</StyledShuffleSelector>
      </li>
  )
}

export default ShuffleSelector;