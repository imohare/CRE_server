//Router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//Pages
import {
  LandingPage,
  LoginPage,
  RegisterPage
} from './Pages';

const App:React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/artist" element={<LandingPage />} />
      <Route path="/" element={ <LandingPage /> } />
    </Routes>
  </BrowserRouter>
);


export default App;
