import { StyledArtistCardTemplate } from '../../../Styles/styledComponents/StyledCardTemplate';
import { Link } from 'react-router-dom';
import { IArtist } from '../../../Data/DataTypes'



interface IProps {
  background: any;
  artist: IArtist;
}

const ArtistCardTemplate = ({background, artist}: IProps) => {
  return (
    <Link to={`/artist/${artist.id}`}>

      <StyledArtistCardTemplate portrait={artist.profile_picture}>
        <div className="bgImage">
        <img src={background} alt="" />
         </div>
         <div className='portrait'></div>
         <div className='title'><h4>{ artist.name }</h4></div>

      </StyledArtistCardTemplate>

     </Link>
  )
}

export default ArtistCardTemplate

// https://wallpapercave.com/wp/wp7172141.jpg