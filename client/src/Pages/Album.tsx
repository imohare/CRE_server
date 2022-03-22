//react
import { Link } from 'react-router-dom';
//components
//styling

const AlbumPage: React.FunctionComponent = () => {
    //if user && logged in, allow ticket purchase. If artist, no ticket purchase possible. 
    //If not logged in, greyed out and redirect to login page
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            < h1 > album page</h1 >
            <p>user view with album purchase</p>
            <button>purchase album</button>
            <p>artist view without album purchase</p>
            <p>public view without album purchase (redirect to login page?)</p>
        </>
    )
}

export default AlbumPage;