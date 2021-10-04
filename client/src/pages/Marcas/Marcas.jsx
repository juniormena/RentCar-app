import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import {
  createMarca,
  disableMarca,
  getMarcas,
  updateMarca,
} from "../../services/marcasService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";
import { confirmationAlert, handleChangeInput } from "../../lib/generalHelpers";

const marcasHeaders = [
  { id: 1, name: "Descripcion" },
  { id: 2, name: "Fecha Creacion" },
  { id: 3, name: "Fecha modificacion" },
];

function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [show, handleShow, handleClose] = useModal();
  const [marca, setMarca] = useState({ ma_descripcion: "" });
  const pageTitle = "Marcas";

  useEffect(() => {
    getMarcas().then(({ data }) => setMarcas(data));
  }, []);

  function setOnUpdateMode({ ma_id, ma_descripcion }) {
    handleShow();
    setMarca({ ...marca, ma_id, ma_descripcion });
    setUpdateMode(true);
  }

  const closeModal = () => {
    handleClose();
    setUpdateMode(false);
    setMarca({ ...marca, ma_descripcion: "" });
  };

  const marcasForm = () => (
    <form
      onSubmit={(e) =>
        updateMode ? updateMarca(e, marca) : createMarca(e, marca)
      }
    >
      <div className="form-floating mb-3">
        <input
          required
          name="ma_descripcion"
          type="text"
          className="form-control"
          id="marcaDescripcion"
          placeholder="marcaDescripcion"
          value={marca.ma_descripcion}
          onChange={(e) => handleChangeInput(e, marca, setMarca)}
        />
        <label htmlFor="marcaDescripcion">Descripcion</label>
      </div>
      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-success" size="lg" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );

  const marcasRow = (marca) => (
    <tr key={marca.ma_id}>
      <td>{marca.ma_id}</td>
      <td>{marca.ma_descripcion}</td>
      <td>{formatDate(marca.ma_creado)}</td>
      <td>{formatDate(marca.ma_modificado)}</td>
      <td>
        <button
          className="btn btn-outline-primary me-3 text-uppercase"
          onClick={() => setOnUpdateMode(marca)}
        >
          editar
        </button>
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() =>
            confirmationAlert(
              pageTitle,
              `Deseas eliminar la marca ${marca.ma_descripcion}`,
              () => disableMarca({ ma_id: marca.ma_id })
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
        headers={marcasHeaders}
        title={pageTitle}
        children={marcas?.map((marca) => marcasRow(marca))}
        modalChildren={marcasForm()}
        show={show}
        handleClose={closeModal}
        handleShow={handleShow}
      />
    </div>
  );
}

export default Marcas;
