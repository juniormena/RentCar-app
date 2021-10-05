import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createVehiculo,
  disablevehiculo,
  getVehiculos,
  updateVehiculo,
} from "../../services/vehiculosService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";
import useListOfMarcas from "../../hooks/useListOfMarcas";
import useListOfModelos from "../../hooks/useList OfModelos";
import useListOfTipoCombustible from "../../hooks/useListOfTipoCombustible";
import useListOfTipoVehiculo from "../../hooks/useListOfTipoVehiculos";

const vehiculosHeaders = [
  { id: 1, name: "Descripcion" },
  { id: 2, name: "Marca" },
  { id: 3, name: "Modelo" },
  { id: 4, name: "Tipo Vehiculo" },
  { id: 5, name: "Tipo Combustible" },
  { id: 6, name: "Chasis" },
  { id: 7, name: "Motor" },
  { id: 8, name: "PLaca" },
  { id: 9, name: "Estado" },
  { id: 10, name: "Fecha Creacion" },
  { id: 11, name: "Fecha modificacion" },
];

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [vehiculo, setVehiculo] = useState({
    v_descripcion: "",
    v_chasis: "",
    v_motor: "",
    v_place: "",
    v_id_tipo_vehiculo: 0,
    v_id_marca: 0,
    v_id_modelo: 0,
    v_id_tipo_combustible: 0,
  });
  const listOfMarcas = useListOfMarcas();
  const listOfModelos = useListOfModelos(vehiculo.v_id_marca);
  const listOfTipoVehiculo = useListOfTipoVehiculo();
  const listOfTipoCombustible = useListOfTipoCombustible();
  const pageTitle = "Vehiculos";

  useEffect(() => {
    getVehiculos().then(({ data }) => setVehiculos(data));
  }, []);

  function setOnUpdateMode({
    v_id,
    v_descripcion,
    v_chasis,
    v_motor,
    v_place,
    v_id_tipo_vehiculo,
    v_id_marca,
    v_id_modelo,
    v_id_tipo_combustible,
  }) {
    handleShow();
    setVehiculo({
      ...vehiculo,
      v_id,
      v_descripcion,
      v_chasis,
      v_motor,
      v_place,
      v_id_tipo_vehiculo,
      v_id_marca,
      v_id_modelo,
      v_id_tipo_combustible,
    });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setVehiculo({
      ...vehiculo,
      v_descripcion: "",
      v_chasis: "",
      v_motor: "",
      v_place: "",
      v_id_tipo_vehiculo: 0,
      v_id_marca: 0,
      v_id_modelo: 0,
      v_id_tipo_combustible: 0,
    });
  };

  const vehiculosForm = () => (
    <form
      onSubmit={(e) =>
        updateMode ? updateVehiculo(e, vehiculo) : createVehiculo(e, vehiculo)
      }
    >
      <Container>
        <Row>
          <Col>
            <label htmlFor="vehiculoDescripcion">Descripcion</label>
            <input
              required
              name="v_descripcion"
              type="text"
              className="form-control"
              id="vehiculoDescripcion"
              placeholder="Descripcion"
              value={vehiculo.v_descripcion}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            />
          </Col>
          <Col>
            <label>Marca</label>
            <select
              className="form-select mb-3"
              name="v_id_marca"
              required
              value={vehiculo.v_id_marca}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            >
              {listOfMarcas}
            </select>
          </Col>
          <Col>
            <label>Modelo</label>
            <select
              className="form-select mb-3"
              name="v_id_modelo"
              required
              value={vehiculo.v_id_modelo}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            >
              {listOfModelos}
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Tipo Vehiculo</label>
            <select
              className="form-select mb-3"
              name="v_id_tipo_vehiculo"
              required
              value={vehiculo.v_id_tipo_vehiculo}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            >
              {listOfTipoVehiculo}
            </select>
          </Col>
          <Col>
            <label>Tipo combustible</label>
            <select
              className="form-select mb-3"
              name="v_id_tipo_combustible"
              required
              value={vehiculo.v_id_tipo_combustible}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            >
              {listOfTipoCombustible}
            </select>
          </Col>
          <Col>
            <label>Placa</label>
            <input
              required
              name="v_place"
              type="text"
              className="form-control"
              id="vehiculoPlaca"
              placeholder="Placa"
              value={vehiculo.v_place}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Chasis</label>
            <input
              required
              name="v_chasis"
              type="text"
              className="form-control"
              id="vehiculoChasis"
              placeholder="Chasis"
              value={vehiculo.v_chasis}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
            />
          </Col>
          <Col>
            <label>Motor</label>
            <input
              required
              name="v_motor"
              type="text"
              className="form-control"
              id="vehiculoMotor"
              placeholder="Motor"
              value={vehiculo.v_motor}
              onChange={(e) => handleChangeInput(e, vehiculo, setVehiculo)}
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

  const vehiculosRow = (vehiculo) => (
    <tr key={vehiculo.v_id}>
      <td>{vehiculo.v_id}</td>
      <td>{vehiculo.v_descripcion}</td>
      <td>{vehiculo.ma_descripcion}</td>
      <td>{vehiculo.mo_descripcion}</td>
      <td>{vehiculo.tv_descripcion}</td>
      <td>{vehiculo.tc_descripcion}</td>
      <td>{vehiculo.v_chasis}</td>
      <td>{vehiculo.v_motor}</td>
      <td>{vehiculo.v_place}</td>
      <td>{vehiculo.v_estado === 2 ? "Rentado" : "Disponible"}</td>
      <td>{formatDate(vehiculo.v_creado)}</td>
      <td>{formatDate(vehiculo.v_modificado)}</td>
      <td>
        <button
          disabled={vehiculo.v_estado === 2}
          className="btn btn-outline-primary mb-1 text-uppercase"
          onClick={() => setOnUpdateMode(vehiculo)}
        >
          editar
        </button>
        <button
          disabled={vehiculo.v_estado === 2}
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el vehiculo ${vehiculo.v_descripcion}`,
              () => disablevehiculo(vehiculo.v_id)
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
        headers={vehiculosHeaders}
        title={pageTitle}
        children={vehiculos?.map((vehiculo) => vehiculosRow(vehiculo))}
        modalChildren={vehiculosForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
        modalSize="lg"
      />
    </div>
  );
}

export default Vehiculos;
