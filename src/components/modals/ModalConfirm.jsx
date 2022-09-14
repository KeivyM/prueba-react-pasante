import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import endpoints from "../../utils/endpoints";

export const ModalConfirm = ({ url, show, setShow }) => {
  const confirmDelete = async () => {
    await axios.delete(`${endpoints.url}${url}/${show[2]}`);
    setShow([false, ""]);
  };
  const confirmCancel = () => {
    setShow([false, ""]);
  };

  return (
    <>
      <Modal show={show[0]}>
        <Modal.Header>
          <Modal.Title>{show[1]}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={confirmCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
