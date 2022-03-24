import { StyledAlbumCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../../Data/DataTypes'

const background='https://pngimg.com/uploads/vinyl/vinyl_PNG37.png'

interface IProps {
  album: IAlbum;
}

const AlbumCardTemplate = ({album}: IProps) => {
  return (
    <Link to={`/album/${album.id}`}>
      <StyledAlbumCardTemplate background={background}>
      <div className='title'><h4>{ album.name }</h4></div>
      <div className='portrait'></div>
      </StyledAlbumCardTemplate>
     </Link>
  )
}

export default AlbumCardTemplate