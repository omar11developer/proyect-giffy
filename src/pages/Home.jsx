import { Fragment, useState } from 'react';
import {Link, useLocation} from 'wouter'
import '../styles/Home.css'
const Home = () => {
  const POPULAR_GIFS = ["Morty","Rick", "Osos", "Panda"]
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const handleSubmit = evt => {
     //navegar a otra ruta
     evt.preventDefault()
     pushLocation(`/search/${keyword}`)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
    return (
      <Fragment>
        <div className='optiones'>
       <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here .." />
       </form>

          <ul>
          {
            POPULAR_GIFS.map((popularGift) => ( 
              <li key={popularGift}>
                <Link to={`/search/${popularGift}`} > Gifs de {popularGift}</Link>
              </li>
            ))
          }
          </ul>
         
        </div>
          </Fragment>
    )
};

export default Home;
