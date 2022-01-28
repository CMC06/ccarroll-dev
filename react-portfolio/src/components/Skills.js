import { Container } from 'react-bootstrap';

const images = require.context('../img', true);

const Skills = () => {

  return (
    <Container className="Skills section" id="skills">
      <h2>Current Coding Skills</h2>
      <div className="codingIcons">
        <ul className="skillsList">
          <li className="skillsListIcon"><div><img src={images(`./JSIcon.png`).default} class="codingIcon" id="JSIcon" alt="Javascript Icon" /><br />JavaScript</div></li>
          <li className="skillsListIcon"><div><img src={images('./ReactLogo.png').default} class="codingIcon" id="ReactIcon" alt="React logo" /><br />React</div></li>
          <li className="skillsListIcon"><div><img src={images("./HTML5Logo.png").default} class="codingIcon" id="HTML5Logo" alt="HTML logo" /><br />HTML5</div></li>
          <li className="skillsListIcon"><div><img src={images("./CSS3Logo.png").default} class="codingIcon" id="CSS3Logo" alt="CSS Logo" /><br />CSS3</div><div id="pacHash"></div></li>
          <li className="skillsListIcon"><div><img src={images("./BootstrapIcon.jpg").default} class="codingIcon" id="BootstrapIcon" alt="Bootstrap Icon" /><br />
          Bootstrap</div></li>
        </ul>
      </div>
    </Container>
  );
};

export default Skills;
