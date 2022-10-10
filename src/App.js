import React, {useState, useEffect} from 'react';
import './App.css';
import getGifts from './services/getGifts';


function App() {
  const [gifts, setGifts] = useState([]);

  useEffect(()=>{
    getGifts({keyword:'morty'}).then(gifts => setGifts(gifts))
  
  },[])

  return (
    <div className="App-content">
      <section>
       {gifts.map( ItemImg => ( 
        <img src={ItemImg.url} alt='' />
       ))}
      </section>
    </div>
  );
}

export default App;
