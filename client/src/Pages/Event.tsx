//react
import { Link } from 'react-router-dom';
//components
//styling

const EventPage: React.FunctionComponent = () => {
    //if user && logged in, allow ticket purchase. If artist, no ticket purchase possible. 
    //If not logged in, greyed out and redirect to login page
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            < h1 > event page</h1 >
            <p>user view with ticket purchase</p>
            <button>ticket</button>
            <p>artist view without ticket purchase</p>
            <p>public view without ticket purchase (redirect to login page?)</p>
        </>
    )
}

export default EventPage;