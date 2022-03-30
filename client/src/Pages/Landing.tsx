//react
import { useState, useContext, useEffect, Suspense } from 'react';
//antd imports
//components
import StyledPage from 'Styles/styledComponents/styledPage';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';
import PublicHeader from 'Components/FormComponents/DataComponents/PublicHeader';
import UserHeader from 'Components/FormComponents/DataComponents/UserHeader';
import Form from '../Components/searchbar';

import Parallax from 'Styles/animations/ParallaxAnimation';
import ShuffleSelector from 'Styles/animations/ShuffleSelector';
import Transition from 'Styles/animations/PageTransitions';
import Background from 'Styles/animations/LandingPageAnim';
//styling
import discoballs from 'images/header_background.jpg'

import { UserContext } from 'Data/UserContext';

import { getAllAlbums } from "Services/Album";
import { getAllMerchandises } from 'Services/Merchandise';
import { getEvents } from 'Services/Event';
import { getArtists } from 'Services/Artist';

///////testing/////////
import { exampleArtist, exampleAlbum, exampleEvent, exampleMerchandise } from '../testing/exampleObjects';
import { IAlbum, IEvent, IMerchandise, IArtist } from 'Data/DataTypes';


import { Link, NavLink } from 'react-router-dom';
import { FormContextProvider } from 'Data/FormConfigs/FormContext';
import LoginModal from 'Components/FormComponents/DataComponents/LoginModal';
import StyledButton from 'Styles/styledComponents/StyledButton';
import StyledHeader from 'Styles/styledComponents/StyledHeader';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import BetterBalls from './4_Mirror_Balls';
import Balls from './4_Mirror_Balls_2';
import './Landing.css'

const LandingPage: React.FunctionComponent = () => {

  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { userType, setUserType } = useContext(UserContext);
  const { currentId, name } = useContext(UserContext);

  // are we not meant to set the user type here to use it later?
  const toggleLogin = () => {
    setIsLogin(prev => !prev)
  }
  const toggleRegister = () => {
    setIsRegister(prev => !prev)
  }

  const filters = ['newest', 'rarest', 'most popular', 'upcoming']

  const [selected, setSelected] = useState(filters[0]);



  const [artists, setArtists] = useState<IArtist[] | []>([]);
  const [dupeArtists, setDupeArtists] = useState<IArtist[] | []>([]);

  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);

  useEffect(() => {
    getArtists()
      .then((response: IArtist[]) => {
        if (response) {
          setArtists(response)
          setDupeArtists(response)
        } else {
          console.log('no artistsfound')
        }
      })
    getAllAlbums()
      .then((response: IAlbum[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setAlbums(response)
        }
        else setAlbums(response)
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
    getEvents()
      .then((response: IEvent[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setEvents(response)
        }
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
    getAllMerchandises()
      .then((response: IMerchandise[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setMerchandise(response)
        }
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
  }, [])


  const [searchval, setSearchVal] = useState('');

  const searchArtists = (e: any) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    searchFilter(searchval)
  }, [searchval])

  const searchFilter = (searchval: any) => {
    if (searchval === '') setArtists(dupeArtists);
    else {
      const newArtistList = dupeArtists.filter((el) => {
        const artistName = el.name.toLowerCase();
        return artistName.includes(searchval);
      });
      setArtists(newArtistList);
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <Canvas camera={{ fov: 55, position: [40, 150, 800] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <BetterBalls />
          <Balls />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>


      <Transition>
        <StyledPage>
          {(userType === 'public') ? <PublicHeader /> : <UserHeader searchVal={ searchval } searchArtists={ searchArtists } currentName={`Welcome, ${name}!`} />}
          <Background />


          <ScrollList title='Artists'>
            {/* @ts-ignore */}
            {artists.map((artist: IArtist) => <ArtistCardTemplate artist={artist} background={artist.profile_picture} />)}
          </ScrollList>

          <ScrollList title='Newest Albums'>
            {albums.map(album => <AlbumCardTemplate album={album} />)}
          </ScrollList>

          <ScrollList title='Newest Events'>
            {events.map(event => <EventCardTemplate event={event} background={event.tokens_image} />)}
          </ScrollList>

          <ScrollList title='Newest Merchandise'>
            {merchandise.map(merchandise => <MerchCardTemplate merchandise={merchandise} background={merchandise.tokens_image} />)}
          </ScrollList>

        </StyledPage>

      </Transition>

    </div>
  )
}

export default LandingPage;


//           <Form className="ArtistSearch" searchArtists={searchArtists} value={searchval} />
