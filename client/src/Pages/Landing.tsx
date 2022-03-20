import { Link } from 'react-router-dom';

const LandingPage: React.FunctionComponent = () => (
  //if user, display personalised component on top -> artist || user - else, have a login sign up option
  <>
    <h1>Landing page</h1>
    <p>public view without personalisation but with login/signup option</p>
    <Link to="/login">login or sign up</Link>
    <p>for user and artist with personalised components at the top</p>
    <p>user view with recommendations</p>
    <Link to="/event">each link to an event </Link>/<Link to="/artist"> artist</Link>
    <p>artist view with upcoming</p>
    <Link to="/artist">each a link to an upcoming event</Link>

  </>
)

export default LandingPage;