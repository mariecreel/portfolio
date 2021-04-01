import React from 'react';
import CarouselImage from './CarouselImage.js';
import CarouselOverlay from './CarouselOverlay.js';

export default function CarouselItem(props){
  console.log(props)
  return(
    <div className="carousel-item active" key="{props.key}">
      <CarouselImage src={props.image}
                    alt={props.title}
      />
      <CarouselOverlay href={props.href}
               title={props.title}
               repo={props.repo}
               headline={props.headline}
               software={props.software}
      />
    </div>
  )
}
