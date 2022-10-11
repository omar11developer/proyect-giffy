import React, { Fragment } from "react";
import "../styles/Gifs.css";
export const Gif = ({ id, url, title }) => {
  return (
    <Fragment>
        <div className="items" key={id}>
      <a href={`#${id}`} className="click-item">
          <img src={url} alt={title} />
          <h4>{title}</h4>
      </a>
        </div>
    </Fragment>
  );
};
