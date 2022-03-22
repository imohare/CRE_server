//react
import { Link } from 'react-router-dom';
//components
//styling

const MerchandisePage: React.FunctionComponent = () => {
    //if user && logged in, allow ticket purchase. If artist, no ticket purchase possible. 
    //If not logged in, greyed out and redirect to login page
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            < h1 > merchandise page</h1 >
            <p>user view with merchandise purchase</p>
            <button>purchase merchandise</button>
            <p>artist view without merchandise purchase</p>
            <p>public view without merchandise purchase (redirect to login page?)</p>
        </>
    )
}

export default MerchandisePage;