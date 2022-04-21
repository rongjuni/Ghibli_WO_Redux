import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} exact to="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link as={Link} to="/films">
            Films
          </Nav.Link>
          <Nav.Link as={Link} to="/people">
            People
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
