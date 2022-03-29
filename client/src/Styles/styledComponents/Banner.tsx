import { motion } from 'framer-motion';
import styled from 'styled-components';

const BannerComponent = () => {
  return (<div>
            <motion.div className="background">
             <div className="hero-image"></div>
           </motion.div>
         </div>)
}

const StyledBannerComponent = styled(BannerComponent)<{image: string, background: string}>`
border-radius: 5px;
width: 100%;
height: 20vh;
position: relative;
background-color: white;

.hero-image {
  position: absolute;
  background-image: url('${props => props.image}');
  border-radius: 50%;
  border: 6px ${({theme})=>theme.fontColor};
  background-size: cover;
  background-repeat: no-repeat;
}
.background {
  position: relative;
  width: 100%;
  background-image: url('${props => props.background}');
}
`

export default StyledBannerComponent;