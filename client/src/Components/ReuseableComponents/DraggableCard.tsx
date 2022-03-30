
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IAlbum } from 'Data/DataTypes';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';
import StyledDraggableCard from 'Styles/styledComponents/styledDraggableCards'


interface IProps {
  album: IAlbum;
  classified?: string;
  rotation: number;
}

// { image, title, value, userLevel }: IProps



const DraggableAlbumCard = ({ rotation, album, classified } : IProps) => {

  /* @ts-ignore */
 

  return ( 
    <StyledDraggableCard
      drag
      rotation={rotation}
      background={album.tokens_image}
    >
      <div className={`${classified} false entire`}>

        <div className="image"></div> 
        <div className="title">
          { album.name }
        </div>
        <div className="value">
          { album.tokens_value }
        </div>
        <Link to={`/album/${album.id}`}
        className="link">
        go to page
        </Link>
        </div>
      </StyledDraggableCard>
  )
}

export default DraggableAlbumCard;

//<DraggableCard image={events[0].tokens_image} title={events[0].name} value={events[0].tokens_value}></DraggableCard>