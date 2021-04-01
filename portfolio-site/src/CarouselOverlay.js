import React from 'react';

export default function CarouselOverlay(props){
  return(
    <div className="overlay">
      <div className="overlay-text">
        <a href={props.href} target="_blank">
          <h2>{props.title}</h2>
        </a>
        <a href={props.repo} target="_blank">
          Github Repo
        </a>
        <br/>
        {props.headline}
        <br/>
        {props.software}
      </div>
    </div>
  )
}
