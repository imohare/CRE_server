//Router
import {  Routes, Route, useLocation } from 'react-router-dom';
import { UserContextProvider } from 'Data/UserContext';
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
import GlobalStyles from 'Styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'Styles/Themes'
import { AnimatePresence } from 'framer-motion';
import { useDarkMode } from 'Styles/styledComponents/useDarkmode';
//global user context

const App: React.FunctionComponent = () => {

  const location = useLocation();
  const [theme, themeToggler]= useDarkMode();

   const themeMode = theme === 'light' ? lightTheme : darkTheme;

 
  return (
    // <ThemeProvider theme={themeMode}>
   <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      </ThemeProvider>
        <UserContextProvider>
        <Routes key={location.pathname} location={location}>
            <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/event/:eventId" element={<EventPage />} />
          <Route path="/merchandise/:merchandiseId" element={<MerchandisePage />} />
          <Route path="/user/:consumerId" element={<UserPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </UserContextProvider>
    </AnimatePresence>
  // </ThemeProvider>
  )
}

export default App;
