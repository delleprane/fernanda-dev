import './App.css';
import { Menu } from './Components/Menu';
import { About } from './Components/About/indexs';
import { Projects } from './Components/Projects';
import { Experience } from './Components/Experience';
import { Review } from './Components/Review';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Pathway+Gothic+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Dela+Gothic+One&family=Pathway+Gothic+One&display=swap');
        </style>
        <Menu />
        <About />
        <Projects />
        <Review/>
        <Experience />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
