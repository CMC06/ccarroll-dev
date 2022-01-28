import { Container } from 'react-bootstrap';
import bannerPhoto from '../img/Banner.jpg';

function PhotoHeadline() {

  return (
    <section className='PhotoHeadline'>
      <img src={bannerPhoto} alt="developer working at computer" id="headshot" />
      <Container><h1>Chelsea Carroll's Development Portfolio</h1></Container>
    </section>
    );
}

export default PhotoHeadline;
