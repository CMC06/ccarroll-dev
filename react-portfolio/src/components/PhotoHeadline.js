import { Container } from 'react-bootstrap';
import bannerPhoto from '../img/Banner.jpg';

function PhotoHeadline() {

  return (
    <section className='photoHeadline'>
      <Container className='photoHeadline'><h1>Chelsea Carroll's Development Portfolio</h1></Container>
      <img src={bannerPhoto} alt="developer working at computer" id="headshot" />    
    </section>
    );
}

export default PhotoHeadline;
