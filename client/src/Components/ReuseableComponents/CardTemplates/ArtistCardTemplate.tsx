import { StyledArtistCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IArtist } from '../../../Data/DataTypes'



interface IProps {
  artist: IArtist;
}

const ArtistCardTemplate = ({ artist}: IProps) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      
      <StyledArtistCardTemplate portrait={artist.profile_picture}>
        <div className="bgImage">
     </div>
         <div className='portrait'></div>
         <div className='title'><h4>{ artist.name }</h4></div>

      </StyledArtistCardTemplate>

     </Link>
  )
}

export default ArtistCardTemplate

