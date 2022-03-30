import DraggableCard from 'Components/ReuseableComponents/DraggableCard';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const StyledDraggableCard = styled(motion.div) <{rotation: number, background: string}>`
  transform: rotate(${props=> props.rotation}deg);
  background-color: rgba(0, 0, 0, 0.5);
  height: 8rem;
  width: 11rem;
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
    height: 100%;
    width: 100%;
    background-image: url(${props => props.background});
    background-size: cover;

  }
  .value {
    display: none;
    color: #eb9800;
    font-size: 1rem;
    margin-bottom: -1rem;
  }

  .link {
    font-size: 1rem;
    // color: #00003f ;
    color: #eb9800;
    width: 100%;
    text-align: center;
    margin: 4px;
    border-color: #9ecaed;
    border-radius: 8px;
    background-color: rgba( 100, 100, 100, 0.3);
    margin-top: -0.5rem;
  }
  .link:hover {
    color: #ffae42;
    text-shadow: 1px 1px yellow;
    background-color: rgb(190,190, 190)
  }
`


export default StyledDraggableCard;