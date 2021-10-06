import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createEmpleado,
  disableEmpleado,
  getEmpleados,
  updateEmpleado,
} from "../../services/empleadosServices";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";
import { TANDA_LABOR } from "../../lib/constants";
import useListOfTandaLabor from "../../hooks/useListOfTandaLabor";

const empleadosHeaders = [
  { id: 1, name: "Nombre" },
  { id: 2, name: "Cedula" },
  { id: 3, name: "Tanda" },
  { id: 4, name: "Comision %" },
  { id: 5, name: "Fecha de ingreso" },
];

const initialState = {
  emp_nombre: "",
  emp_cedula: "",
  emp_tanda_labor: TANDA_LABOR.MATUTINA,
  emp_porciento_comision: 0,
  emp_fecha_ingreso: new Date().toISOString().split("T")[0],
};

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [empleado, setEmpleado] = useState(initialState);
  const pageTitle = "Empleados";
  const listOfTandaLabor = useListOfTandaLabor();

  useEffect(() => {
    getEmpleados().then(({ data }) => setEmpleados(data));
  }, []);

  function setOnUpdateMode({
    emp_id,
    emp_nombre,
    emp_cedula,
    emp_tanda_labor,
    emp_porciento_comision,
    emp_fecha_ingreso,
  }) {
    handleShow();
    const fechaIngreso = new Date(emp_fecha_ingreso)
      .toISOString()
      .split("T")[0];
    setEmpleado({
      ...empleado,
      emp_id,
      emp_nombre,
      emp_cedula,
      emp_tanda_labor,
      emp_porciento_comision,
      emp_fecha_ingreso: fechaIngreso,
    });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setEmpleado(initialState);
  };

  const empleadosForm = () => (
    <form
      onSubmit={(e) =>
        updateMode ? updateEmpleado(e, empleado) : createEmpleado(e, empleado)
      }
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <label>Nombre</label>
            <input
              required
              name="emp_nombre"
              type="text"
              className="form-control"
              id="nombreEmpleado"
              placeholder="Nombre"
              value={empleado.emp_nombre}
              onChange={(e) => handleChangeInput(e, empleado, setEmpleado)}
            />
          </Col>
          <Col>
            <label>Cedula</label>
            <input
              required
              name="emp_cedula"
              type="text"
              className="form-control"
              id="cedulaEmpleado"
              placeholder="Cedula sin guiones"
              value={empleado.emp_cedula}
              maxLength="11"
              pattern={`[0-9]+`}
              onChange={(e) => handleChangeInput(e, empleado, setEmpleado)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Tanda de Labor</label>
            <select
              className="form-select mb-3"
              name="emp_tanda_labor"
              required
              value={empleado.emp_tanda_labor}
              onChange={(e) => handleChangeInput(e, empleado, setEmpleado)}
            >
              {listOfTandaLabor}
            </select>
          </Col>
          <Col>
            <label>Porcentaje de comision</label>
            <input
              required
              name="emp_porciento_comision"
              type="number"
              className="form-control"
              id="limiteCredito"
              placeholder="Porcentaje de comision"
              value={empleado.emp_porciento_comision}
              onChange={(e) => handleChangeInput(e, empleado, setEmpleado)}
            />
          </Col>
          <Col>
            <label>Fecha de ingreso</label>
            <input
              required
              disabled={updateMode}
              name="emp_fecha_ingreso"
              type="date"
              className="form-control"
              id="fechaIngreso"
              placeholder="Fecha de ingreso"
              value={empleado.emp_fecha_ingreso}
              onChange={(e) => handleChangeInput(e, empleado, setEmpleado)}
            />
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

  const empleadosRow = (empleado) => (
    <tr key={empleado.emp_id}>
      <td>{empleado.emp_id}</td>
      <td>{empleado.emp_nombre}</td>
      <td>{empleado.emp_cedula}</td>
      <td>{empleado.emp_tanda_labor}</td>
      <td>{empleado.emp_porciento_comision}</td>
      <td>{formatDate(empleado.emp_fecha_ingreso, false)}</td>
      <td>
        <button
          className="btn btn-outline-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(empleado)}
        >
          editar
        </button>
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el empleado ${empleado.emp_nombre}`,
              () => disableEmpleado({ emp_id: empleado.emp_id })
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
        headers={empleadosHeaders}
        title={pageTitle}
        children={empleados?.map((empleado) => empleadosRow(empleado))}
        modalChildren={empleadosForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
        modalSize="lg"
      />
    </div>
  );
}

export default Empleados;
