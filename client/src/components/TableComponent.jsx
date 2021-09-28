import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function TableComponent({
  headers,
  title,
  children,
  modalChildren,
  show,
  handleClose,
  handleShow,
}) {
  console.log(children);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalChildren}</Modal.Body>
      </Modal>

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
    </>
  );
}

export default TableComponent;
