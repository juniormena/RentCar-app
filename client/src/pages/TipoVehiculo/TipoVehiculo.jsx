import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createTipoVehiculo,
  disableTipoVehiculo,
  getTipoVehiculo,
  updateTipoVehiculo,
} from "../../services/tipoVehiculoService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";

const tipoVehiculoHeaders = [
  { id: 1, name: "Descripcion" },
  { id: 2, name: "Fecha Creacion" },
  { id: 3, name: "Fecha modificacion" },
];

function TipoVehiculo() {
  const [tipoVehiculos, setTipoVehiculos] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [tipoVehiculo, setTipoVehiculo] = useState({
    tv_descripcion: "",
  });
  const pageTitle = "tipo Vehiculo";

  useEffect(() => {
    getTipoVehiculo().then(({ data }) => setTipoVehiculos(data));
  }, []);

  function setOnUpdateMode({ tv_id, tv_descripcion }) {
    handleShow();
    setTipoVehiculo({ ...tipoVehiculo, tv_id, tv_descripcion });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setTipoVehiculo({ ...tipoVehiculo, tv_descripcion: "" });
  };

  const tipoVehiculoForm = () => (
    <form
      onSubmit={(e) =>
        updateMode
          ? updateTipoVehiculo(e, tipoVehiculo)
          : createTipoVehiculo(e, tipoVehiculo)
      }
    >
      <div className="form-floating mb-3">
        <input
          required
          name="tv_descripcion"
          type="text"
          className="form-control"
          id="tvDescripcion"
          placeholder="tvDescripcion"
          value={tipoVehiculo.tv_descripcion}
          onChange={(e) => handleChangeInput(e, tipoVehiculo, setTipoVehiculo)}
        />
        <label htmlFor="tvDescripcion">Descripcion</label>
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-success" size="lg" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );

  const tipoVehiculoRow = (tipoVehiculo) => (
    <tr key={tipoVehiculo.tv_id}>
      <td>{tipoVehiculo.tv_id}</td>
      <td>{tipoVehiculo.tv_descripcion}</td>
      <td>{formatDate(tipoVehiculo.tv_creado)}</td>
      <td>{formatDate(tipoVehiculo.tv_modificado)}</td>
      <td>
        <button
          className="btn btn-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(tipoVehiculo)}
        >
          editar
        </button>
        <button
          className="btn btn-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el tipo vehiculo ${tipoVehiculo.tv_descripcion}`,
              () => disableTipoVehiculo({ tv_id: tipoVehiculo.tv_id })
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
        headers={tipoVehiculoHeaders}
        title={pageTitle}
        children={tipoVehiculos?.map((tipoVehiculo) =>
          tipoVehiculoRow(tipoVehiculo)
        )}
        modalChildren={tipoVehiculoForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
      />
    </div>
  );
}

export default TipoVehiculo;
