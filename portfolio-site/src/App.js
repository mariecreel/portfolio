import './App.css';
import ProjectCards from './ProjectCards.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Marie Creel</h1>
      <h2 className="subtitle">Front-end developer, 42.3464° N, 71.1627° W.</h2>
      </header>
      <div className="projects">
        <h1 className="subtitle">Projects</h1>
        <ProjectCards/>
      </div>
    </div>
  );
}

export default App;
