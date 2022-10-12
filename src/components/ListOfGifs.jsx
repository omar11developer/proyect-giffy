import React, { useState, useEffect, Fragment } from "react";
import { Gif } from "./Gif";
import getGifts from "../services/getGifts";
import Spinner from "./Spinner";

export const ListOfGifs = ({ params }) => {
  const [loading, setLoading] = useState(false)
  const [gifts, setGifts] = useState([]);
  const {keyword} = params;
  useEffect(() => {
    setLoading(true)
    getGifts({ keyword })
    .then((gifts) => {
      setGifts(gifts)
      setLoading(false)
    });
  }, [keyword]);
  if (loading) return <Spinner/>
  return (
    <Fragment>
      {gifts.map((ItemGif) => (
        <Gif
          key={ItemGif.id}
          title={ItemGif.title}
          url={ItemGif.url}
          id={ItemGif.id}
        />
      ))}
    </Fragment>
  );
};
