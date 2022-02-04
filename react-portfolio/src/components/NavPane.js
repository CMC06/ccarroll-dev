import CodingProjectsNavList from "./CodingProjectsNavList"
import { Nav, Navbar, Container } from 'react-bootstrap'
import GitHubLogo from '../img/GitHub-Mark.png'
import LinkedIn from '../img/LI-In-Bug.png'

const NavPane = () => {
    return (
    
      <Navbar bg="dark" variant="dark" expand="lg"  fixed="bottom" >
        <Container>
          <Navbar.Brand href="#">Chelsea Carroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" variant="dark"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#bio">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills Overview</Nav.Link>
              <CodingProjectsNavList bg="dark" variant="dark"/>
              <Nav.Link href="#contactinfo">Contact Information</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/CMC06" target="_blank" rel="noreferrer" ><img src={GitHubLogo} alt="Git Hub Icon" height="25px" /></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/chelsea-carroll-205477102/" target="_blank" rel="noreferrer" ><img src={LinkedIn} alt="LinkedIn small icon" height="25px"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}

export default NavPane
