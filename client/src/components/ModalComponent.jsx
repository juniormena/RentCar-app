import Modal from "react-bootstrap/Modal";

function ModalComponent({ show, handleClose, title, children }) {
  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title className="text-uppercase">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
