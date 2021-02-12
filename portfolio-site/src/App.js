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
            I've always been obsessed with computers
            and the possibilities they offer for creating. As a teen, I worked deep
            into the night tweaking the CSS on my blog, motivated by how wonderful
            it felt to express myself through code. It seemed natural to pursue
            computer science in college, as I grew more curious about
            how computer code transformed from what I typed to what I saw on the screen.
            I gained valuable experience with web development, becoming
            familiar with tools such as Javascript, Python, Node.js, and React, as
            well as broader concepts such as mobile-first design, web accessibility,
            UI/UX, and developing within a team.I know I have much to learn still,
            but I'm determined to hone my skills by doing, developing
            and designing beautiful, functional, user-friendly webpages.
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
              <div className="col-2"><a href="mailto:nick.creel@pm.me">nick.creel@pm.me</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
