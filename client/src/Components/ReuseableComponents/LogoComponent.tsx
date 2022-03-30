import {Link }from 'react-router-dom';
import StyledLogo from 'Styles/styledComponents/StyledLogo';
import { motion } from 'framer-motion';



const LogoComponent = () => {
  return (
      <Link to="/">
    <StyledLogo>
        <motion.div className="ball ball-1"
       
          whileHover={{scale: 1.1}}
        >N</motion.div>
        <motion.div className="ball ball-2"
        whileHover={{scale: 1.1}}>F</motion.div>
        <motion.div className="ball ball-3"
        whileHover={{scale: 1.1}}>T</motion.div>
        <motion.div className="ball ball-4"
        whileHover={{scale: 1.1}}>Y</motion.div>
      </StyledLogo>
      </Link>
)
}
export default LogoComponent