import DraggableCard from 'Components/ReuseableComponents/DraggableCard';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const StyledDraggableCard = styled(motion.div) <{rotation: number, background: string}>`
  transform: rotate(${props=> props.rotation}deg);
  background-color: rgba(0, 0, 0, 0.9);
  height: 11rem;
  width: 9rem;
  position: absolute;
  border-radius: 7px;
  z-index: 0;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  .true {
  }
  .false {
  }
  .entire {
    height: 100%;
    width: 100%;
  }
  .title {
    color: white;
    font-size: 1.2rem;
  }
  .image {
    background-color: black;
    height: 55%;
    width: 100%;
    background-image: url(${props => props.background});
    background-size: cover;

  }
  .value {
    color: #eb9800;
  }

  .link {
    font-size: 1rem;
    color: #00003f ;
    width: 100%;
    text-align: center;
    margin: 4px;
    border-color: #9ecaed;
    border-radius: 8px;
    background-color: rgba( 100, 100, 100, 0.3);
    margin-top: -0.5rem;
  }
  .link:hover {
    color: blue;
  }
`


export default StyledDraggableCard;