import React from 'react';
import gamez4grrrlz from './gamez4grrlz.png';
import hatsunemicu from './hatsunemicu.png';
import moviesearch from './moviesearch.png';

export default function ProjectCards(){
  return (
    <div id="projects" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">


        <div className="carousel-item active">
          <img className="carousel-image"src={moviesearch} alt="Movie Search"/>
          <div className="overlay">
            <p className="overlay-text">
              <a href="https://cursed.co.in/movie-db-react" target="_blank"><h2>Movie Search</h2></a><br/>
              Simple movie search engine powers by The Movie Database's API (TMDb API).<br/><br/>
              Software used: Javascript, React, HTML/CSS
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="carousel-image"src={gamez4grrrlz} alt="gamez4grrrlz"/>
          <div className="overlay">
            <p className="overlay-text">
              <a href="https://cursed.co.in/gamez4grrrlz" target="_blank"><h2>gamez4grrrlz</h2></a><br/>
              Collection of three interactive hypertext poems inspired by classic flash games. <br/><br/>
              Software used: Javascript, HTML/CSS, JQueryUI
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="carousel-image"src={hatsunemicu} alt="hatsunem.icu"/>
          <div className="overlay">
            <p className="overlay-text">
              <a href="" target="_blank"><h2>hatsunem.icu</h2></a><br/> Loads a random youtube video from a curated playlist of
              songs featuring Vocaloid Hatsune Miku. <br/><br/>
              Software used: Python, Flask, Youtube API, HTML/CSS, gunicorn, Heroku
            </p>
          </div>
        </div>


      </div>
      <a class="carousel-control-prev" href="#projects" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#projects" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}
