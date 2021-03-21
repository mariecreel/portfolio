import './App.css';
import ProjectCards from './ProjectCards.js'

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
      <h1 className="title">M. Creel</h1>
      <h2 className="subtitle">Front-end developer & Writer | Boston, MA</h2>
      </header>
      <div className="overview container-fluid">
        <h1 className="overview-title">Overview</h1>
        <div className="overview-content row justify-content-center">
          <div className="col justify-content-center">
          I'm a recent Computer Science and Writing graduate searching for
          opportunities to develop software with social impact. My skills
          lie mainly in front end development, specifically in Javascript, HTML,
          and CSS. I've created websites (including this one!) using modern
          Javascript technologies, such as React, Svelte, and Typescript, and
          I have experience designing UI with Bootstrap and Sass. I'm eager to
          learn new technologies and contribute to software with purpose.
          </div>
        </div>
      </div>
      <div className="projects container-fluid">
        <h1 className="projects-title">Projects</h1>
        <ProjectCards/>
      </div>
      <div className="contact container-fluid">
        <div className="contact-title">Contact</div>
        <div className="contact-content">
          <div className="row justify-content-center">
              <div className="col-2"><a href="https://github.com/ncreel" target="_blank">Github</a></div>
              <div className="col-2"><a href="https://linkedin.com/in/m-creel" target="_blank">Linkedin</a></div>
              <div className="col-2"><a href="mailto:marie.n.creel@gmail.com">marie.n.creel@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
