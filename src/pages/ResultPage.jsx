import React, { Fragment } from "react";
import { ListOfGifs } from "../components/ListOfGifs";
import Spinner from "../components/Spinner";
import { useGifs } from "../hooks/useGifs";

export const ResultPage = ({ params }) => {
  const { keyword } = params;
  const {loading, gifts} = useGifs({keyword})
  return (
    <Fragment>
        { loading ? <Spinner/> : <ListOfGifs gifts={gifts} />
        }
    </Fragment>
  );
};
