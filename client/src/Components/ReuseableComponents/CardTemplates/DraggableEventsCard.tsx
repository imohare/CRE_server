import { Link } from 'react-router-dom';
import { IEvent } from 'Data/DataTypes';
import StyledDraggableCard from 'Styles/styledComponents/styledDraggableCards'


interface IProps {
  event: IEvent;
  classified?: string;
  rotation: number;
}




const DraggableEventsCard = ({ rotation, event, classified } : IProps) => {

  /* @ts-ignore */
 

  return ( 
    <StyledDraggableCard
      drag
      rotation={rotation}
      background={event.tokens_image}
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

export default DraggableEventsCard;