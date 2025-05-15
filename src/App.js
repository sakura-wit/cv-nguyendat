import "./App.css";
import "./styles/header.css";
import "./styles/instruction.css";
import "./styles/experiences.css";
import "./styles/projects.css";

import Header from "./components/Header";
import Instruction from "./modules/Instruction";
import Experiences from "./modules/Experience";
import Projects from "./modules/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Instruction />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
