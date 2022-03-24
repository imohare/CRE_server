import { StyledArtistCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IArtist } from '../../../Data/DataTypes'



interface IProps {
  background: string | undefined;
  artist: IArtist;
}

const ArtistCardTemplate = ({background, artist}: IProps) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      <StyledArtistCardTemplate background={background} portrait={artist.profile_picture}>
      {/* name artist */}
      <div className='title'><h4>{ artist.name }</h4></div>
      <div className='portrait'></div>
      </StyledArtistCardTemplate>
     </Link>
  )
}

export default ArtistCardTemplate

// https://wallpapercave.com/wp/wp7172141.jpg