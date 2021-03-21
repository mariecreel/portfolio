import React from 'react';
import mbtaarrivals from './mbtaarrivals.png';
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
              Simple movie search engine powers by <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database's API (TMDb API)</a>.<br/><br/>
              Software used: JavaScript, React, HTML/CSS
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="carousel-image"src={mbtaarrivals} alt="mbtaarrivals"/>
          <div className="overlay">
            <p className="overlay-text">
              <a href="https://cursed.co.in/gamez4grrrlz" target="_blank"><h2>MBTA Arrival Predictions (In Development)</h2></a><br/>
              Predicts when the next train arrives at a selected stop on the MBTA subway system through calls to the <a href="https://www.mbta.com/developers/v3-api">MBTA API</a>. <br/><br/>
              Software used: JavaScript, TypeScript, Svelte, HTML/CSS, Rollup, Vercel
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img className="carousel-image"src={hatsunemicu} alt="hatsunem.icu"/>
          <div className="overlay">
            <p className="overlay-text">
              <a href="http://hatsunem.icu" target="_blank"><h2>hatsunem.icu</h2></a><br/> Loads a random youtube video from a curated playlist of
              songs featuring Vocaloid Hatsune Miku via calls to the <a href="https://developers.google.com/youtube/v3">YouTube API<a/>.<br/><br/>
              Software used: Python, Flask, HTML/CSS, gunicorn, Heroku
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
