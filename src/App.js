import { Link, Route } from "wouter";

import "./App.css";
import { ListOfGifs } from "./components/ListOfGifs";

function App() {
  return (
    <div className="App-content">
        <Link to="/gif/morty">Gifs Morty</Link>
      <section className="items-container">
        <Route path="/gif/:keyword" component={ListOfGifs} />
        
      </section>
    </div>
  );
}

export default App;
