import './App.css';
import ProjectCards from './ProjectCards.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">M. Creel</h1>
      <h2 className="subtitle">Front-end developer, 42.3464° N, 71.1627° W.</h2>
      </header>
      <div className="overview">
        <h1 className="overview-title">Overview</h1>
        <p className="overview-content">I've always been obsessed with computers
        and the possibilities they offer for creating. As a teen, I worked deep
        into the night tweaking the CSS on my blog, motivated by how wonderful
        it felt to express myself through code. It only seemed natural to pursue
        computer science in college, as I had only grown more curious about
        how computer code transformed from written word to interactive interfaces.
        I gained valuable experience with web development, becoming
        familiar with tools such as Javascript, Python, Node.js, and React, as
        well as broader concepts such as mobile-first design, web accessibility,
        UI/UX, and developing within a team.I know I have much to learn still,
        but I'm determined to hone my skills by doing, developing
        and designing beautiful, functional, user-friendly webpages.
        </p>
      </div>
      <div className="projects">
        <h1 className="projects-title">Projects</h1>
        <ProjectCards/>
      </div>
    </div>
  );
}

export default App;
