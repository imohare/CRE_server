//Router
import {  Routes, Route, useLocation } from 'react-router-dom';
import { UserContextProvider } from './Data/UserContext';
//Pages
import {
  LandingPage,
  EventPage,
  ArtistPage,
  AlbumPage,
  MerchandisePage,
  UserPage
} from './Pages';


//styling
import GlobalStyles from './Styles/globalStyles';
import { AnimatePresence } from 'framer-motion';

//global user context

const App: React.FunctionComponent = () => {

  const location = useLocation();

  return (
   <AnimatePresence exitBeforeEnter>
      <GlobalStyles />
      <UserContextProvider>
        <Routes key={location.pathname} location={location}>
          <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/event/:eventId" element={<EventPage />} />
          <Route path="/merchandise/:merchandiseId" element={<MerchandisePage />} />
          <Route path="/user/:consumerId" element={<UserPage />} />

          {/* delete after development */}
          {/* <Route path="/test" element={<TestPage />} /> */}
          {/* stop delete after development */}

          <Route path="/" element={<LandingPage />} />
        </Routes>
      </UserContextProvider>
    </AnimatePresence>
     
  )
}

export default App;
