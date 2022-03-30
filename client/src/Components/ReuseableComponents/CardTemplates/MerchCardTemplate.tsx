
import { StyledMerchCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IMerchandise } from '../../../Data/DataTypes';


interface IProps {
  background: string;
  merchandise: IMerchandise;
}

const MerchCardTemplate = ({merchandise, background}: IProps) => {
  return (
    <Link to={`/merchandise/${merchandise.id}`}>
      <StyledMerchCardTemplate background={background}>
        <div className='image'/>
        <div className='description'><h4>{merchandise.name}</h4></div>
      </StyledMerchCardTemplate>
     </Link>
  )
}


export default MerchCardTemplate