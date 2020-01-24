import React, { useEffect, useState } from "react";
import Button from "./Button";
import Giphymaker from "./Giphymaker";

export default function Friend() {
  const [giphy, setGiphy] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getGiphy = () => {
    setLoading(true);
    fetch(
      "http://api.giphy.com/v1/gifs/search?api_key=I22qzaSdICzGEGyDP5nt3aQa5FmQiFjL&q=home"
    )
      .then(resp => resp.json())
      .then(data => {
        setGiphy(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getGiphy, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (hasError) {
    return <p>has error</p>;
  }
  if (giphy) {
    return (
      <div className='giphy'>
        <Button onClick={getGiphy} />
        <Giphymaker giphy={giphy} />
      </div>
    );
  }
}
