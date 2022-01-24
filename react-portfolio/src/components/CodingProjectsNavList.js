import projects from "../Projects"
import { NavDropdown } from "react-bootstrap";

const CodingProjectsNavList = () => {
  const projectNav = projects.map((project) => {
    return (
      <NavDropdown.Item href={project.hash}>{project.navname}</NavDropdown.Item>
    )
  });

return (
    <NavDropdown title="Coding Projects" id="basic-nav-dropdown" menuVariant="dark">
      {projectNav}
    </NavDropdown>
)
}

export default CodingProjectsNavList
