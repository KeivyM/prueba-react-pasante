import Modal from "react-bootstrap/Modal";

export const ModalAuthFailed = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show[0]} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{show[1]}</Modal.Body>
    </Modal>
  );
};
