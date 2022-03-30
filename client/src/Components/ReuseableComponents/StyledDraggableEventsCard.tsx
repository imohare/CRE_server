

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IEvent} from 'Data/DataTypes';
import StyledDraggableCard from 'Styles/styledComponents/styledDraggableCards'


interface IProps {
  event: IEvent;
  classified?: string;
  rotation: number;
}

// { image, title, value, userLevel }: IProps


const DraggableEventCard = ({ rotation, event, classified} : IProps) => {

  /* @ts-ignore */
 

  return ( 
    <StyledDraggableCard
      drag
      rotation={rotation}
      background={ event.tokens_image }
    >
      <div className={`${classified} false entire`}>

        <div className="image"></div> 
        <div className="title">
          { event.name }
        </div>
        <div className="value">
          { event.tokens_value }
        </div>
        <Link to={`/event/${event.id}`}
        className="link">
        go to page
        </Link>
        </div>
      </StyledDraggableCard>
  )
}

export default DraggableEventCard;

//<DraggableCard image={events[0].tokens_image} title={events[0].name} value={events[0].tokens_value}></DraggableCard>