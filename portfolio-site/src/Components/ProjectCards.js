import React from 'react';
import CarouselItem from './CarouselItem.js';
import projects from '../data/projects.json';
const projectsList = projects.projects;

console.log(projectsList)

export default function ProjectCards(){
  return (
    <div className="projects container-fluid">
      <h1 className="projects-title">Projects</h1>
        <div id="projects" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {projectsList.filter(project => project.title).map(project => (

              <CarouselItem {...project}/>
          ))}
          </div>
          <a className="carousel-control-prev" href="#projects" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#projects" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  )
}
