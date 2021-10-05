import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createCliente,
  disableCliente,
  getClientes,
  updateCliente,
} from "../../services/clientesServicios";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";
import { TIPO_PERSONA } from "../../lib/constants";
import useListOfTipoPersona from "../../hooks/useListOfTipoPersona";

const clientesHeaders = [
  { id: 1, name: "Nombre" },
  { id: 2, name: "Cedula" },
  { id: 3, name: "No. Tarjeta CR" },
  { id: 4, name: "Limite de credito" },
  { id: 5, name: "Tipo persona" },
];

const initialState = {
  c_nombre: "",
  c_cedula: "",
  c_tarjeta_cr: "",
  c_limite_credito: 0,
  c_tipo_persona: TIPO_PERSONA.FISICA,
};

function Vehiculos() {
  const [clientes, setClientes] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [cliente, setCliente] = useState(initialState);
  const pageTitle = "Clientes";
  const listOfTipoPersonas = useListOfTipoPersona();

  useEffect(() => {
    getClientes().then(({ data }) => setClientes(data));
  }, []);

  function setOnUpdateMode({
    c_id,
    c_nombre,
    c_cedula,
    c_tarjeta_cr,
    c_limite_credito,
    c_tipo_persona,
  }) {
    handleShow();
    setCliente({
      ...cliente,
      c_id,
      c_nombre,
      c_cedula,
      c_tarjeta_cr,
      c_limite_credito,
      c_tipo_persona,
    });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setCliente(initialState);
  };

  const clientesForm = () => (
    <form
      onSubmit={(e) =>
        updateMode ? updateCliente(e, cliente) : createCliente(e, cliente)
      }
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <label>Nombre</label>
            <input
              required
              name="c_nombre"
              type="text"
              className="form-control"
              id="nombreCliente"
              placeholder="Nombre"
              value={cliente.c_nombre}
              onChange={(e) => handleChangeInput(e, cliente, setCliente)}
            />
          </Col>
          <Col>
            <label>Cedula</label>
            <input
              required
              name="c_cedula"
              type="text"
              className="form-control"
              id="cedulaCliente"
              placeholder="Cedula sin guiones"
              value={cliente.c_cedula}
              maxLength="11"
              pattern="[0-9]+"
              onChange={(e) => handleChangeInput(e, cliente, setCliente)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>No.Tarjeta CR</label>
            <input
              required
              name="c_tarjeta_cr"
              type="text"
              className="form-control"
              id="tarjetaCRcliente"
              placeholder="Tarjeta de credito sin guiones"
              value={cliente.c_tarjeta_cr}
              maxLength="12"
              onChange={(e) => handleChangeInput(e, cliente, setCliente)}
            />
          </Col>
          <Col>
            <label>Limite de credito</label>
            <input
              required
              name="c_limite_credito"
              type="number"
              className="form-control"
              id="limiteCredito"
              placeholder="Limite de credito"
              value={cliente.c_limite_credito}
              onChange={(e) => handleChangeInput(e, cliente, setCliente)}
            />
          </Col>
          <Col>
            <label>Tipo de persona</label>
            <select
              className="form-select mb-3"
              name="c_tipo_persona"
              required
              value={cliente.c_tipo_persona}
              onChange={(e) => handleChangeInput(e, cliente, setCliente)}
            >
              {listOfTipoPersonas}
            </select>
          </Col>
        </Row>
      </Container>

      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-success" size="lg" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );

  const clientesRow = (cliente) => (
    <tr key={cliente.c_id}>
      <td>{cliente.c_id}</td>
      <td>{cliente.c_nombre}</td>
      <td>{cliente.c_cedula}</td>
      <td>{cliente.c_tarjeta_cr}</td>
      <td>{cliente.c_limite_credito}</td>
      <td>{cliente.c_tipo_persona}</td>
      <td>{formatDate(cliente.c_creado)}</td>
      <td>{formatDate(cliente.c_modificado)}</td>
      <td>
        <button
          className="btn btn-outline-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(cliente)}
        >
          editar
        </button>
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el cliente ${cliente.c_nombre}`,
              () => disableCliente({ c_id: cliente.c_id })
            )
          }
        >
          eliminar
        </button>
      </td>
    </tr>
  );

  return (
    <div className="mt-3">
      <TableComponent
        headers={clientesHeaders}
        title={pageTitle}
        children={clientes?.map((cliente) => clientesRow(cliente))}
        modalChildren={clientesForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
        modalSize="lg"
      />
    </div>
  );
}

export default Vehiculos;
