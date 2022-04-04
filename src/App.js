import './App.css';
import CodingProjectCards from './components/CodingProjectCards';
import Header from './components/Header';
import PhotoHeadline from './components/PhotoHeadline';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContentBuffer from './components/ContentBuffer';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentBuffer hashID='#'/>
      <PhotoHeadline />
      <ContentBuffer hashID="bio" />
      <Bio />
      <ContentBuffer hashID="skills" />
      <Skills />
      <ContentBuffer hashID="projects" />
      <CodingProjectCards />
      <ContentBuffer hashID="contactinfo" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
