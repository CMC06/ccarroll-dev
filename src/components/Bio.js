import { Container, Row, Col } from 'react-bootstrap';


const Bio = () => {

  const bioBlurb = "Hello, my name is Chelsea, and I am always happiest when I am making something or solving a problem. I enjoy collaborating with teammates to tackle interesting challenges. I’ve worked as a paralegal and as a college administrator. During my time in both fields, I consistently gravitated toward projects or assignments that leveraged technology to help people. My curiosity about what was going on behind the user interface only grew with time. \n After exploring JavaScript independently, I decided to go all in and pursue a career in software development. I have completed a full stack engineering certificate program from MIT xPRO, and am excited for a future career in software engineering and web development.";

  return (
    <section className='section biotext' id="bio">
      <Container>
        <Row>
          <Col xs={12} s={6} m={6} lg={6} xl={6} xxl={6} >
            <h2>About Me</h2>
            <p className='bodyP'>{bioBlurb}</p>
          </Col>
          <Col>
            <Row className="bioList">
                <h4>Education:</h4>
                <ul className='bioBullets'>
                  <li className='bioBullets'>Dartmouth College, Bachelor of Arts in History</li>
                  <li className='bioBullets'>Indiana University, M.S.Ed. Higher Education and Student Affairs</li>
                  <li className='bioBullets'>MIT xPRO, Professional Certificate in Coding: Full Stack Development with MERN</li>
                </ul>
            </Row>
            <Row className="bioList">
              <h4>Hobbies {'&'} Interests:</h4>
              <ul className='bioBullets'>
                <li className='bioBullets'>Travel {'&'} Travel Planning</li>
                <li className='bioBullets'>Games (Computer and Board)</li>
                <li className='bioBullets'>Cooking {'&'} Baking</li>
                <li className='bioBullets'>Knitting {'&'} Crochet</li> 
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>  
    );
};

export default Bio;
