//Router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//Pages
import {
  LandingPage,
  RegisterPage,
  EventPage,
  ArtistPage
} from './Pages';
//styling
import GlobalStyles from './Styles/globalStyles';
//global user context

const App:React.FunctionComponent = () => (
  <BrowserRouter>
    <GlobalStyles />
    {/* <UserContextProvider> */}
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/event" element={ <EventPage /> } />
      <Route path="/" element={ <LandingPage /> } />
      </Routes>
    {/* </UserContextProvider> */}
  </BrowserRouter>
);


export default App;
