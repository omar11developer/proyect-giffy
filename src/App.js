import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Details from './pages/Details'
import "./App.css";
import { ListOfGifs } from "./components/ListOfGifs";
import logo from "./logoGift.png";

function App() {
  return (
    <div className="App-content">
        <div className="header">
         <Link to="/">
          <img src={logo} alt="logo" />
         </Link>
         <Route path="/" component={Home} />
        </div>
      <section className="items-container">
        <Route path="/search/:keyword" component={ListOfGifs} />
        <Route path="/gif/:id" component={Details} />
      </section>
    </div>
  );
}

export default App;
