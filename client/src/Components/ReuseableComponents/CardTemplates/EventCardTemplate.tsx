import { StyledEventCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IEvent } from '../../../Data/DataTypes';


interface IProps {
  background: string;
  event: IEvent
}

const EventCardTemplate = ({event, background}: IProps) => {
  return (
    <Link to={`/event/${event.id}`}>
      <StyledEventCardTemplate background={background}>
        {/* name artist */}
        <div className='image'>
        <div className="date"><span>THU 24/03/22</span></div>
        </div>
        <div className='title'><h4>{event.name}</h4></div>
        <div className='location'>{ event.address}</div>
      </StyledEventCardTemplate>
     </Link>
  )
}

export default EventCardTemplate;

// https://wallpapercave.com/wp/wp7172141.jpg