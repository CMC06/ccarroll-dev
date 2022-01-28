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
      <body className='body'>
        <Bio />
        <Skills />
        <CodingProjectCards />
        <Contact />
      </body>
      <Footer />
    </div>
  );
}

export default App;
