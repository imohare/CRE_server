
import { IArtist } from 'Data/DataTypes'



interface IProps {
  artist: IArtist
}

const ArtistHeader = ({ artist }: IProps) => {
  return (
    <div>
      <div className='portrait'>

      </div>
      <div className='upcoming'></div>
    </div>
  )
}

export default ArtistHeader