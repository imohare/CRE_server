import styled from 'styled-components';
import { motion } from 'framer-motion';


const HeaderAnimation = styled(motion.div)`
position: absolute;
width: 100vw;
height: 100%;
.orange{
  background-color: #a0472e;
  width: 15px;
  heigth: 290px;
  border-radius: 7px;
  right: 20vw;
  position: absolute;
  z-index: 100;
}
.blueish {
  width: 15px;
  heigth: 290px;
  background-color: #a7c2bf;
  right: 48vw;
  top: 90px;
  z-index: 100;
}`

export default HeaderAnimation;
