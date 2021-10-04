import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createTipoCombustible,
  disableTipoCombustible,
  getTipoCombustible,
  updateTipoCombustible,
} from "../../services/tipoCombustibleService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";

const tipoCombustibleHeaders = [
  { id: 1, name: "Descripcion" },
  { id: 2, name: "Fecha Creacion" },
  { id: 3, name: "Fecha modificacion" },
];

function TipoCombustile() {
  const [tipoCombustiles, setTipoCombustiles] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [tipoCombustible, setTipoCombustible] = useState({
    tc_descripcion: "",
  });
  const pageTitle = "tipo Combustile";

  useEffect(() => {
    getTipoCombustible().then(({ data }) => setTipoCombustiles(data));
  }, []);

  function setOnUpdateMode({ tc_id, tc_descripcion }) {
    handleShow();
    setTipoCombustible({ ...tipoCombustible, tc_id, tc_descripcion });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setTipoCombustible({ ...tipoCombustible, tc_descripcion: "" });
  };

  const tipoCombustileForm = () => (
    <form
      onSubmit={(e) =>
        updateMode
          ? updateTipoCombustible(e, tipoCombustible)
          : createTipoCombustible(e, tipoCombustible)
      }
    >
      <div className="form-floating mb-3">
        <input
          required
          name="tc_descripcion"
          type="text"
          className="form-control"
          id="tcDescripcion"
          placeholder="tcDescripcion"
          value={tipoCombustible.tc_descripcion}
          onChange={(e) =>
            handleChangeInput(e, tipoCombustible, setTipoCombustible)
          }
        />
        <label htmlFor="tcDescripcion">Descripcion</label>
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-success" size="lg" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );

  const tipoCombustileRow = (tipoCombustible) => (
    <tr key={tipoCombustible.tc_id}>
      <td>{tipoCombustible.tc_id}</td>
      <td>{tipoCombustible.tc_descripcion}</td>
      <td>{formatDate(tipoCombustible.tc_creado)}</td>
      <td>{formatDate(tipoCombustible.tc_modificado)}</td>
      <td>
        <button
          className="btn btn-outline-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(tipoCombustible)}
        >
          editar
        </button>
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el tipo combustible ${tipoCombustible.tc_descripcion}`,
              () => disableTipoCombustible({ tc_id: tipoCombustible.tc_id })
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
        headers={tipoCombustibleHeaders}
        title={pageTitle}
        children={tipoCombustiles?.map((tipoCombustible) =>
          tipoCombustileRow(tipoCombustible)
        )}
        modalChildren={tipoCombustileForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
      />
    </div>
  );
}

export default TipoCombustile;
