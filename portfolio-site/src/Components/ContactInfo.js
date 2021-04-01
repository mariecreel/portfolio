import React from 'react';

export default function ContactInfo(props){
  return (
    <div className="col-2">
      <a href={props.link} target="_blank">{props.method}</a>
    </div>
  )
}
