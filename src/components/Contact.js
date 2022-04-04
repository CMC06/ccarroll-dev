import { Container } from "react-bootstrap";
const images = require.context('../img', true);

const Contact = () => {
  return (
    <Container className="section" >
      <h2>Contact Information</h2>
      <ul>
        <li className="contactList"><div><img src={images("./GitHub-Mark.png").default} alt="Git Hub Mark Icon" height="30px" /><a href="https://github.com/CMC06" className="plainLink">  GitHub Profile</a></div></li>
        <li className="contactList"><div><img src={images("./LI-In-Bug.png").default} alt="LinkedIn small icon" height="30px" /><a href="https://www.linkedin.com/in/chelsea-carroll-205477102/" className="plainLink">  LinkedIn Profile</a></div></li>
      </ul>
    </Container>
  );
};

export default Contact;
