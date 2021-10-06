import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { handleChangeInput } from "../../lib/generalHelpers";
import { getCurrentUser, login } from "../../services/authServices";
import { useLocation } from "react-router";

function Login() {
  const [empleado, setEmpleado] = useState({
    emp_cedula: "",
    emp_password: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (getCurrentUser()) {
      window.location.href = "/";
    }
  }, []);

  return (
    <Container className="md-5">
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Card>
            <Card.Header className="text-center">INICIAR SESION</Card.Header>
            <Card.Body>
              <form onSubmit={(e) => login(e, empleado, location.state?.from)}>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    name="emp_cedula"
                    className="form-control"
                    id="cedula"
                    placeholder="Cedula"
                    maxLength="11"
                    pattern={`[0-9]+`}
                    value={empleado.emp_cedula}
                    onChange={(e) =>
                      handleChangeInput(e, empleado, setEmpleado)
                    }
                  />
                  <label htmlFor="cedula">Cedula</label>
                </div>
                <div className="form-floating">
                  <input
                    required
                    type="password"
                    name="emp_password"
                    className="form-control"
                    id="contrasena"
                    placeholder="Contrasena"
                    value={empleado.emp_password}
                    onChange={(e) =>
                      handleChangeInput(e, empleado, setEmpleado)
                    }
                  />
                  <label htmlFor="contrasena">Contrasena</label>
                </div>
                <div className="d-grid gap-2 mt-4">
                  <Button variant="outline-success" size="lg" type="submit">
                    Entrar
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;
