import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import ModalComponent from "./ModalComponent";

function TableComponent({
  headers,
  title,
  children,
  modalChildren,
  show,
  handleClose,
  handleShow,
  modalSize = "sm",
}) {
  return (
    <Fragment>
      <ModalComponent
        show={show}
        title={title}
        handleShow={handleShow}
        handleClose={handleClose}
        size={modalSize}
      >
        {modalChildren}
      </ModalComponent>

      <Card>
        <Card.Header className="text-uppercase fw-bold d-flex justify-content-between">
          {title}
          <button className="btn btn-outline-primary ms-2" onClick={handleShow}>
            Crear
          </button>
        </Card.Header>
        <Table striped hover borderless responsive>
          <thead>
            <tr>
              <th>#</th>
              {headers.map((header) => (
                <th key={header.id} className="text-uppercase">
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children === undefined || children?.length === 0
              ? "NO DATA PARA MOSTRAR"
              : children}
          </tbody>
        </Table>
      </Card>
    </Fragment>
  );
}

export default TableComponent;
