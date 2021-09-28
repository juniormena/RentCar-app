import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Container className="md-5">
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <Card>
            <Card.Header className="text-center">INICIAR SESION</Card.Header>
            <Card.Body>
              <form>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="number"
                    className="form-control"
                    id="cedula"
                    placeholder="Cedula"
                  />
                  <label htmlFor="cedula">Cedula</label>
                </div>
                <div className="form-floating">
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="contrasena"
                    placeholder="Contrasena"
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
