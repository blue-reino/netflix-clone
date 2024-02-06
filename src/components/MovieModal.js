import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MoviePopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <button onClick={handleShow} className = "watch-movie-btn">
        Watch Movie
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Movie Content!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Play Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MoviePopup;