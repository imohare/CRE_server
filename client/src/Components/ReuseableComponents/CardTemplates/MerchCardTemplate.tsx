
import { StyledMerchCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IMerchandise } from '../../../Data/DataTypes';


interface IProps {
  background: string;
  merchandise: IMerchandise;
}

const MerchCardTemplate = ({merchandise, background}: IProps) => {
  return (
    <Link to={`/event/${merchandise.id}`}>
      <StyledMerchCardTemplate>
        <div className='image'>
        </div>
        <div className='title'><h4>{merchandise.name || 'anonymous event'}</h4></div>
      </StyledMerchCardTemplate>
     </Link>
  )
}


export default MerchCardTemplate