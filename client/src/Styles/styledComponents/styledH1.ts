import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledH1 = styled(motion.h1)`
  font-size: calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)));
  font-family: 'raleway';
  text-transform: uppercase;
  position: relative;
  max-width: 100%;
  word-break: break-word;
  z-index: 10;
  color: white;
  // text-shadow: 1px 1px #a7c2bf;
`;

export default StyledH1;