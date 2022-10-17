import { Fragment, useState } from "react";
import { useLocation } from "wouter";
import { ListOfGifs } from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import { useGifs } from "../hooks/useGifs";

import "../styles/Home.css";
const Home = () => {
  //const POPULAR_GIFS = ["Morty","Rick", "Osos", "Panda"]
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const handleSubmit = (evt) => {
    //navegar a otra ruta
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  const { gifts, loading } = useGifs({ keyword: "rick" });
  return (
    <Fragment>
      <div className="optiones">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={keyword}
            placeholder="Search a gif here .."
          />
        </form>

        {
        loading ? <Spinner /> : <ListOfGifs gifts={gifts} />
  
        }
      </div>
    </Fragment>
  );
};

export default Home;
