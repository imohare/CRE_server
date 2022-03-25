import { StyledAlbumCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../../Data/DataTypes'


interface IProps {
  album: IAlbum;
  background?: any;
}

const AlbumCardTemplate = ({album, background}: IProps) => {
  return (
    <Link to={`/album/${album.id}`}>
      <StyledAlbumCardTemplate background={background}>

        <div className="coverImg" >
        </div>
        <div className='description'>
          <h4>{album.name}</h4>
          <p>{ album.description }</p>
        </div>       

      </StyledAlbumCardTemplate>
     </Link>
  )
}

export default AlbumCardTemplate