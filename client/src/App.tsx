import './App.css';
//Router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//Pages
import {
 Landing
} from '/Pages';

const App = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landing /> } />
    </Routes>
  </BrowserRouter>
);


export default App;
