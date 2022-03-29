import { StyledAlbumCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../../Data/DataTypes'


interface IProps {
  album: IAlbum;
  background?: any;
}

const AlbumCardTemplate = ({album}: IProps) => {
  return (
    <Link to={`/album/${album.id}`}>
      <StyledAlbumCardTemplate background={album.tokens_image}>

        <div className="coverImg" >
        </div>
        <div className='description'>
          <h4>{album.name}</h4>
        </div>       

      </StyledAlbumCardTemplate>
     </Link>
  )
}

export default AlbumCardTemplate