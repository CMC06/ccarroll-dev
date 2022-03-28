import { Container } from 'react-bootstrap';

const images = require.context('../img', true);

const Skills = () => {

  return (
    <Container className="Skills section" id="skills">
      <h2>Current Coding Skills</h2>
      <div className="codingIcons">
        <ul className="skillsList">
          <li className="skillsListIcon"><div><img src={images(`./JSIcon.png`).default} className="codingIcon" id="JSIcon" alt="Javascript Icon" /><br />JavaScript</div></li>
          <li className="skillsListIcon"><div><img src={images('./ReactLogo.png').default} className="codingIcon" id="ReactIcon" alt="React logo" /><br />React</div></li>
          <li className="skillsListIcon"><div><img src={images('./nodeLogo.png').default} className="codingIcon" id="NodeIcon" alt="Node logo" /><br />Node</div></li>
          <li className="skillsListIcon"><div><img src={images('./expressLogo.png').default} className="codingIcon" id="ExpressIcon" alt="Express logo" /><br />Express</div></li>
          <li className="skillsListIcon"><div><img src={images('./mongoDBLogo.png').default} className="codingIcon" id="MongoDBIcon" alt="MongoDB logo" /><br />MongoDB</div></li>
          <li className="skillsListIcon"><div><img src={images("./HTML5Logo.png").default} className="codingIcon" id="HTML5Logo" alt="HTML logo" /><br />HTML5</div></li>
          <li className="skillsListIcon"><div><img src={images("./CSS3Logo.png").default} className="codingIcon" id="CSS3Logo" alt="CSS Logo" /><br />CSS3</div><div id="pacHash"></div></li>
          <li className="skillsListIcon"><div><img src={images("./BootstrapIcon.jpg").default} className="codingIcon" id="BootstrapIcon" alt="Bootstrap Icon" /><br />
          Bootstrap</div></li>
        </ul>
      </div>
    </Container>
  );
};

export default Skills;
