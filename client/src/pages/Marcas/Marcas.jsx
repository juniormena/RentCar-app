import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import TableComponent from "../../components/TableComponent";
import { getMarcas } from "../../services/marcasService";
import { formatDate } from "../../lib/dateHelpers";
import useModal from "../../hooks/useModal";

const marcasHeaders = [
  { id: 1, name: "Descripcion" },
  { id: 2, name: "Fecha Creacion" },
  { id: 3, name: "Fecha modificacion" },
];

function Marcas() {
  const [marcas, setMarcas] = useState([]);
  const [show, handleShow, handleClose] = useModal();
  useEffect(() => {
    getMarcas().then((data) => setMarcas(data));
  }, []);

  const marcasRow = (marca) => (
    <tr key={marca.ma_id}>
      <td>{marca.ma_id}</td>
      <td>{marca.ma_descripcion}</td>
      <td>{formatDate(marca.ma_creado)}</td>
      <td>{formatDate(marca.ma_modificado)}</td>
      <td>
        <button className="btn btn-primary me-3 text-uppercase">editar</button>
        <button className="btn btn-danger text-uppercase">eliminar</button>
      </td>
    </tr>
  );

  return (
    <div className="mt-3">
      <TableComponent
        headers={marcasHeaders}
        title="marcas"
        children={marcas?.data?.map((marca) => marcasRow(marca))}
        modalChildren={<p>fgsfgsdfgsdfgsdf</p>}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}

export default Marcas;
