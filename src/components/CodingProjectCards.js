import projects from "../Projects";
import { Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap'

const images = require.context('../img', true);

const CodingProjectCards = () => {

  const cards = projects.map( project => {
    let title = project.title;
    let description = project.description;
    let imgSrc = project.imgSrc;
    let imgAlt = project.imgAlt;
    let demourl = project.demourl;
    let repourl = project.repourl;
    let languages = project.languages;
    let id = project.id;

    return (
      <Card style={{ width: '20rem' }} id={id} variant="dark" key={id}>
        <Card.Img variant="top" src={images(`${imgSrc}`).default} alt={imgAlt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><Card.Link href={demourl} target="_blank" className="grayPlainLink" >Project Demo</Card.Link></ListGroupItem>
          <ListGroupItem><Card.Link href={repourl} target="_blank" className="grayPlainLink"  >Project Repo</Card.Link></ListGroupItem>
          <ListGroupItem className="coding-languages">{languages}</ListGroupItem>
        </ListGroup>
      </Card>
    )
  });
  

  return (
    <Container className="Projects section">
      <h2>Coding Projects</h2>
      <div className="projectCards">
        {cards}
      </div>
    </Container>
  );
};

export default CodingProjectCards;
