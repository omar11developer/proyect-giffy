import React, { Fragment } from "react";
import {Link} from "wouter"
import "../styles/Gifs.css";
export const Gif = ({ id, url, title }) => {
  return (
    <Fragment>
        <div className="items" key={id}>
      <Link href={`/search/gift/${id}`} className="click-item">
          <img src={url} alt={title} />
          <h4>{title}</h4>
      </Link>
        </div>
    </Fragment>
  );
};
