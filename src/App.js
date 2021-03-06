import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='container'>
      <About />
      <Skills />
      <Projects />
      <Contact/>
      </div>
    </div>
  );
}

export default App;
