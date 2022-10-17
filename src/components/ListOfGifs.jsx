import React, {  Fragment } from "react";
import { Gif } from "./Gif";
import '../styles/ListOfGifs.css'
export const ListOfGifs = ({ gifts }) => {

  return (
    <Fragment>
      <div className="items-container">
      {gifts.map((ItemGif) => (
        <Gif
          key={ItemGif.id}
          title={ItemGif.title}
          url={ItemGif.url}
          id={ItemGif.id}
        />
      ))}

      </div>
    </Fragment>
  );
};
