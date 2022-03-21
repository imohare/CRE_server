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

const App:React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/event" element={ <EventPage /> } />
      <Route path="/" element={ <LandingPage /> } />
    </Routes>
  </BrowserRouter>
);


export default App;
