
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMerchandise } from 'Data/DataTypes';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';
import StyledDraggableCard from 'Styles/styledComponents/styledDraggableCards'


interface IProps {
  merch: IMerchandise;
  classified?: string;
  rotation: number;
}

// { image, title, value, userLevel }: IProps



const DraggableMerchCard = ({ rotation, merch, classified } : IProps) => {

  /* @ts-ignore */
 

  return ( 
    <StyledDraggableCard
      drag
      rotation={rotation}
      background={merch.tokens_image}
    >
      <div className={`${classified} false entire`}>
        <div className="image"></div> 
        <div className="title">
          { merch.name }
        </div>
        <div className="value">
          { merch.tokens_value }
        </div>
        <Link to={`/merch/${merch.id}`}
        className="link">
        go to page
        </Link>
        </div>
      </StyledDraggableCard>
  )
}

export default DraggableMerchCard;
