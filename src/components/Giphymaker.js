import React from "react";

export default function Giphymaker({ giphy }) {
  return (
    <div>
      <img src={giphy.data[0].images.original.url} alt='giphy' />
    </div>
  );
}
