import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getCurrentUser, logOut } from "../services/authServices";

function NavbarComponent() {
  const currentUser = getCurrentUser();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">RentCar-JM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/vehiculos">Vehiculos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/empleados">Empleados</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-3">
            Has iniciado sesion como:{" "}
            <a href="#login">{currentUser?.emp_nombre}</a>
          </Navbar.Text>
          <Navbar.Text>
            <button
              className="btn btn-outline-danger text-uppercase"
              onClick={logOut}
            >
              Cerrar sesion
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
