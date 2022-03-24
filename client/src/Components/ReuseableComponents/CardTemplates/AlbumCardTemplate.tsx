import { StyledAlbumCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../../Data/DataTypes'

const background='https://p7.hiclipart.com/preview/387/453/292/phonograph-record-lp-record-45-rpm-album-clip-art-concerts.jpg'

interface IProps {
  album: IAlbum;
}

const AlbumCardTemplate = ({album}: IProps) => {
  return (
    <Link to={`/artist/${album.id}`}>
      <StyledAlbumCardTemplate background={background}>
      <div className='title'><h4>{ album.name }namenamenaem</h4></div>
      <div className='portrait'></div>
      </StyledAlbumCardTemplate>
     </Link>
  )
}

export default AlbumCardTemplate