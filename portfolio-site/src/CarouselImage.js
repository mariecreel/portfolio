import React from 'react';

import mbtaarrivals from './mbtaarrivals.png';
import hatsunemicu from './hatsunemicu.png';
import moviesearch from './moviesearch.png';

const images = {
  "mbtaarrivals": mbtaarrivals,
  "hatsunemicu": hatsunemicu,
  "moviesearch": moviesearch
}

export default function CarouselImage(props){
  console.log(images[props.src])
  return(
    <img className="carousel-image" src={images[props.src]} alt={props.alt}>
    </img>
  )
}
