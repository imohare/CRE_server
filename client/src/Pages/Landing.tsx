//react
import { useState, useContext, useEffect, Suspense } from 'react';
//antd imports
//components
import StyledPage from 'Styles/styledComponents/styledPage';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';
import PublicHeader from 'Components/FormComponents/DataComponents/PublicHeader';
import UserHeader from 'Components/FormComponents/DataComponents/UserHeader';

//styling
import { LayoutGroup } from 'framer-motion';
import Parallax from 'Styles/animations/ParallaxAnimation';
import ShuffleSelector from 'Styles/animations/ShuffleSelector';
import Transition from 'Styles/animations/PageTransitions';
import Background from 'Styles/animations/LandingPageAnim';

//contexts
import { UserContext } from 'Data/UserContext';
//data 
import { getAllAlbums } from "Services/Album";
import { getAllMerchandises } from 'Services/Merchandise';
import { getEvents } from 'Services/Event';
import { getArtists } from 'Services/Artist';

import { IAlbum, IEvent, IMerchandise, IArtist } from 'Data/DataTypes';


import { OrbitControls, useGLTF } from '@react-three/drei'
import {Canvas } from '@react-three/fiber'
import BetterBalls from './4_Mirror_Balls';
import Balls from './4_Mirror_Balls_2';

import Form from '../Components/searchbar';

const LandingPage: React.FunctionComponent = () => {

  //public view
  //login popup is set to visible on clicking the login button and to invisible on clicking cancel on Modal component:
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { userType, setUserType } = useContext(UserContext);
  const { currentId, name } = useContext(UserContext);

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
         const artistName= el.name.toLowerCase();
         return artistName.includes(searchval);
       });
       setArtists(newArtistList);
     }
   }

  return (
    <Transition>

        {(userType === 'public')
          ? <PublicHeader />
          : <UserHeader currentName={`Welcome, ${name}!`} />
        }
      
      <StyledPage>
        <Background />

{/* 
      <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <BetterBalls />
                          <Balls/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
        </Canvas> */}

        <div>
          <p className="shuffle colorchange filter">
            <LayoutGroup>
              <ul className="filters">
                {filters.map((filter: string) => (<ShuffleSelector
                  key={filter}
                  filterName={selected}
                  hoverOver={() => setSelected(filter)}
                >{filter}
                </ShuffleSelector>))}
              </ul>
            </LayoutGroup>
          </p>
        </div>
        <Form searchArtists={searchArtists} value={searchval}></Form>
        <ScrollList title='Artists'>
            {artists.map((artist: IArtist) => {
              return <ArtistCardTemplate artist={artist}></ArtistCardTemplate>
            })
          }
        </ScrollList>
        <ScrollList title='Newest Albums'>
          {albums.map(album => <div key={album.id}>
            <AlbumCardTemplate album={album} />
          </div>
          )}
        </ScrollList>
        <ScrollList title='Newest Events'>
          {events.map(event => <div key={event.id}>
            <EventCardTemplate event={event} background={event.tokens_image} />
          </div>
          )}
        </ScrollList>
        <ScrollList title='Newest Merchandise'>
          {merchandise.map(merchandise => <div key={merchandise.id}>
            <MerchCardTemplate merchandise={merchandise} background={''} />
          </div>
          )}
        </ScrollList>
      </StyledPage>
    </Transition>
  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'