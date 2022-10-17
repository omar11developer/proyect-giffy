import { useState, useEffect } from "react";
import getGifts from "../services/getGifts";

export function useGifs ({keyword}) {
  const [loading, setLoading] = useState(false);
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    setLoading(true);
    getGifts({ keyword }).then((gifts) => {
      setGifts(gifts);
      setLoading(false);
    });
  }, [keyword]);

  return {loading, gifts}
}
