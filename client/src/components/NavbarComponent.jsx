import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">RentCar-JM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Marcas y Modelos">
              <NavDropdown.Item href="/marcas">Marcas</NavDropdown.Item>
              <NavDropdown.Item href="/modelos">Modelos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tipos">
              <NavDropdown.Item href="/tipoCombustible">
                Tipo Combustible
              </NavDropdown.Item>
              <NavDropdown.Item href="/tipoVehiculo">
                Tipo Vehiculo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/vehiculos">Vehiculos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Junior Mena</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
