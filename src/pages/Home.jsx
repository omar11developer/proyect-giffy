import {Link} from 'wouter'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='optiones'>
        <Link to="/search/morty">Gifs Morty</Link>
          <Link to="/search/Rick">Gifs Rick</Link>
          <Link to="/search/AuronPlay">Gifs AuronPlay</Link>
          <Link to="/search/Panda">Gifs Panda</Link>
        </div>
    )
};

export default Home;
