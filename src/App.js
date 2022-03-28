import './App.css';
import CodingProjectCards from './components/CodingProjectCards';
import Header from './components/Header';
import PhotoHeadline from './components/PhotoHeadline';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoHeadline />
      <Bio />
      <Skills />
      <CodingProjectCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
