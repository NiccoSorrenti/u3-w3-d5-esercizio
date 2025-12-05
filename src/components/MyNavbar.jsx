import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = function () {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#2E2E2E' }}>
        <Container fluid className="m-0 justify-content-between d-flex">
          <div className="d-flex justify-content-center align-items-center">
            <Navbar.Brand className="text-danger">Accedi</Navbar.Brand>
          </div>
          <Navbar.Brand
            href="#home"
            className="text-center justify-content-center"
          >
            {' '}
            <img
              src="./src/assets/logos/music.svg"
              className="text-white"
              alt=""
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
