import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledH1 = styled(motion.h1)`
  font-size: calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)));
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  position: relative;
  max-width: 100%;
  word-break: break-word;
  z-index: 10;
  color: #c5c5c5;
`;

export default StyledH1;