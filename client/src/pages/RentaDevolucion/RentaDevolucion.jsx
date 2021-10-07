import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "../../components/Accordion";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createRentaDevolucion,
  disableRentaDevolucion,
  getRentaDevoluciones,
  updateRentaDevolucion,
} from "../../services/rentaDevolucionService";
import { createInspeccion } from "../../services/inspeccionService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";
import useListOfClientes from "../../hooks/useListOfClientes.js";
import useListOfEmpleados from "../../hooks/useListOfEmpleados";
import useListOfVehiculos from "../../hooks/useListOfVehiculos";
import { getCurrentUser } from "../../services/authServices";
import useListOfYesNoOptions from "../../hooks/useListOfYesNoOptions";
import useListOfCantCombustible from "../../hooks/useListOfCantCombustible";
import { TODAY } from "../../lib/constants";

const rentaDevolucionHeaders = [
  { id: 1, name: "Cliente" },
  { id: 2, name: "Vehiculo" },
  { id: 3, name: "Monto" },
  { id: 4, name: "Cant dias" },
  { id: 5, name: "Total" },
  { id: 6, name: "Fecha renta" },
  { id: 7, name: "Fecha devolucion" },
  { id: 8, name: "Empleado" },
  { id: 9, name: "Comentario" },
  { id: 10, name: "Estado" },
];

const initialState = {
  cliente: 0,
  empleado: getCurrentUser()?.emp_id,
  vehiculo: 0,
  ins_tiene_ralladuras: false,
  ins_cant_combustible: false,
  ins_tiene_goma_respuesta: false,
  ins_tiene_gato: false,
  ins_tiene_roturas_cristal: false,
  ins_fecha_inspeccion: TODAY,
  inspeccion_complete: false,
};
function RentaDevoluciones() {
  const [rentaDevoluciones, setRentaDevoluciones] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [rentaDevolucion, setRentaDevolucion] = useState(initialState);
  const listOfClientes = useListOfClientes();
  const listOfVehiculos = useListOfVehiculos();
  const listOfEmpleados = useListOfEmpleados();
  const listOfYesNo = useListOfYesNoOptions();
  const listOfCantCombustible = useListOfCantCombustible();
  const pageTitle = "Rent car";

  useEffect(() => {
    getRentaDevoluciones().then(({ data }) => setRentaDevoluciones(data));
  }, []);

  console.log(rentaDevolucion);

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
    setRentaDevolucion({
      ...rentaDevolucion,
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
    setRentaDevolucion({});
  };

  const rentaDevolucionForm = () => (
    <form>
      <div className="accordion" id="accordionExample">
        <Accordion id="generalData" title="Informacion generales" open={true}>
          <Container>
            <Row className="mb-4">
              <Col>
                <label>Cliente</label>
                <select
                  className="form-select mb-3"
                  name="cliente"
                  required
                  value={rentaDevolucion.cliente}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfClientes}
                </select>
              </Col>
              <Col>
                <label>Empleado</label>
                <select
                  disabled
                  className="form-select mb-3"
                  name="empleado"
                  required
                  value={rentaDevolucion.empleado}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfEmpleados}
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Vehiculo</label>
                <select
                  className="form-select mb-3"
                  name="vehiculo"
                  required
                  value={rentaDevolucion.vehiculo}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfVehiculos}
                </select>
              </Col>
            </Row>
          </Container>
        </Accordion>

        <Accordion id="inspeccion" title="Inspeccion vehiculo" open={true}>
          <Container>
            <Row className="mb-4">
              <Col>
                <label>Tiene ralladuras?</label>
                <select
                  className="form-select mb-3"
                  name="ins_tiene_ralladuras"
                  required
                  value={rentaDevolucion.ins_tiene_ralladuras}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfYesNo}
                </select>
              </Col>
              <Col>
                <label>Cantidad de combustible</label>
                <select
                  className="form-select mb-3"
                  name="ins_cant_combustible"
                  required
                  value={rentaDevolucion.ins_cant_combustible}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfCantCombustible}
                </select>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <label>Tiene gato?</label>
                <select
                  className="form-select mb-3"
                  name="ins_tiene_gato"
                  required
                  value={rentaDevolucion.ins_tiene_gato}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfYesNo}
                </select>
              </Col>
              <Col>
                <label>Tiene goma respuesta?</label>
                <select
                  className="form-select mb-3"
                  name="ins_tiene_goma_respuesta"
                  required
                  value={rentaDevolucion.ins_tiene_goma_respuesta}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfYesNo}
                </select>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <label>Tiene ralladuras?</label>
                <select
                  className="form-select mb-3"
                  name="ins_tiene_ralladuras"
                  required
                  value={rentaDevolucion.ins_tiene_ralladuras}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfYesNo}
                </select>
              </Col>
              <Col>
                <label>Cantidad de combustible</label>
                <select
                  className="form-select mb-3"
                  name="ins_cant_combustible"
                  required
                  value={rentaDevolucion.ins_cant_combustible}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfCantCombustible}
                </select>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <label>Tiene rotura de cristales?</label>
                <select
                  className="form-select mb-3"
                  name="ins_tiene_roturas_cristal"
                  required
                  value={rentaDevolucion.ins_tiene_roturas_cristal}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                >
                  {listOfYesNo}
                </select>
              </Col>
              <Col>
                <label>Fecha de inspeccion</label>
                <input
                  required
                  name="ins_fecha_inspeccion"
                  type="date"
                  className="form-control"
                  id="fechaInspeccion"
                  placeholder="Fecha de inspeccion"
                  value={rentaDevolucion.ins_fecha_inspeccion}
                  onChange={(e) =>
                    handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                  }
                />
              </Col>
            </Row>
            <div className="form-check">
              <input
                name="inspeccion_complete"
                className="form-check-input"
                type="checkbox"
                value={rentaDevolucion.inspeccion_complete}
                onChange={(e) =>
                  handleChangeInput(e, rentaDevolucion, setRentaDevolucion)
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                Inspeccion Completada
              </label>
            </div>
          </Container>
        </Accordion>
        <Accordion
          id="rentaDevolucion"
          title="Renta"
          disabled={!rentaDevolucion.inspeccion_complete}
        />
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-success" size="lg" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );

  const rentaDevolucionRow = (rentaDevolucion) => (
    <tr key={rentaDevolucion.rdv_id_renta}>
      <td>{rentaDevolucion.rdv_id_renta}</td>
      <td>{rentaDevolucion.c_nombre}</td>
      <td>{rentaDevolucion.v_descripcion}</td>
      <td>{rentaDevolucion.rdv_monto_dia}</td>
      <td>{rentaDevolucion.rdv_cant_dias}</td>
      <td>{rentaDevolucion.rdv_monto_dia * rentaDevolucion.rdv_cant_dias}</td>
      <td>{formatDate(rentaDevolucion.rdv_fecha_renta)}</td>
      <td>{formatDate(rentaDevolucion.rdv_fecha_devolucion)}</td>
      <td>{rentaDevolucion.emp_nombre}</td>
      <td>{rentaDevolucion.rdv_comentario}</td>
      <td>{rentaDevolucion.rdv_estado === 2 ? "Finalizado" : "En Proceso"}</td>
      <td>
        <button
          disabled={rentaDevolucion.rdv_estado === 2}
          className="btn btn-outline-primary mb-2 text-uppercase"
          onClick={() => setOnUpdateMode(rentaDevolucion)}
        >
          editar
        </button>
        <button
          disabled={rentaDevolucion.rdv_estado === 2}
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el rentaDevolucion ${rentaDevolucion.emp_nombre}`,
              () =>
                disableRentaDevolucion({ rdv_id_renta: rentaDevolucion.emp_id })
            )
          }
        >
          eliminar
        </button>
      </td>
    </tr>
  );

  console.log(rentaDevoluciones);

  return (
    <div className="mt-3">
      <TableComponent
        headers={rentaDevolucionHeaders}
        title={pageTitle}
        children={rentaDevoluciones?.map((rentaDevolucion) =>
          rentaDevolucionRow(rentaDevolucion)
        )}
        modalChildren={rentaDevolucionForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
        modalSize="lg"
      />
    </div>
  );
}

export default RentaDevoluciones;
