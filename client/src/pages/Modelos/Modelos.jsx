import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createModelo,
  disableModelo,
  getModelos,
  updateModelo,
} from "../../services/modelosService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";
import useListOfMarcas from "../../hooks/useListOfMarcas";

const modelosHeaders = [
  { id: 1, name: "Marca" },
  { id: 2, name: "Modelo" },
  { id: 3, name: "Fecha Creacion" },
  { id: 4, name: "Fecha modificacion" },
];

function Modelos() {
  const [modelos, setModelos] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const listOfMarcas = useListOfMarcas();
  const [modelo, setModelo] = useState({ mo_id_marca: 0, mo_descripcion: "" });
  const pageTitle = "Modelos";

  useEffect(() => {
    getModelos().then(({ data }) => setModelos(data));
  }, []);

  function setOnUpdateMode({ mo_id, mo_id_marca, mo_descripcion }) {
    handleShow();
    setModelo({ ...modelo, mo_id, mo_id_marca, mo_descripcion });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setModelo({ ...modelo, mo_id_marca: 0, mo_descripcion: "" });
  };

  const modelosForm = () => (
    <form
      onSubmit={(e) =>
        updateMode ? updateModelo(e, modelo) : createModelo(e, modelo)
      }
    >
      <select
        className="form-select mb-3"
        name="mo_id_marca"
        required
        value={modelo.mo_id_marca}
        onChange={(e) => handleChangeInput(e, modelo, setModelo)}
      >
        {listOfMarcas}
      </select>
      <div className="form-floating mb-3">
        <input
          required
          name="mo_descripcion"
          type="text"
          className="form-control"
          id="modeloDescripcion"
          placeholder="modeloDescripcion"
          value={modelo.mo_descripcion}
          onChange={(e) => handleChangeInput(e, modelo, setModelo)}
        />
        <label htmlFor="modeloDescripcion">Descripcion</label>
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button
          variant="outline-success"
          size="lg"
          type="submit"
          disabled={parseInt(modelo.mo_id_marca) === 0}
        >
          Guardar
        </Button>
      </div>
    </form>
  );

  const modelosRow = (modelo) => (
    <tr key={modelo.mo_id}>
      <td>{modelo.mo_id}</td>
      <td>{modelo.ma_descripcion}</td>
      <td>{modelo.mo_descripcion}</td>
      <td>{formatDate(modelo.mo_creado)}</td>
      <td>{formatDate(modelo.mo_modificado)}</td>
      <td>
        <button
          className="btn btn-outline-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(modelo)}
        >
          editar
        </button>
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar el modelo ${modelo.mo_descripcion}`,
              () => disableModelo({ mo_id: modelo.mo_id })
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
        headers={modelosHeaders}
        title={pageTitle}
        children={modelos?.map((modelo) => modelosRow(modelo))}
        modalChildren={modelosForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
      />
    </div>
  );
}

export default Modelos;
