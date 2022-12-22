import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MovieContext } from '../../context/MovieContext';

function MyVerticallyCenteredModal(props) {
  const [rasm, setRasm] = useState('');
  const [name, setName] = useState('');
  const [published, setPublished] = useState('');
  const [author, setAuthor] = useState('');
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create moive
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          image: <br></br>
          <input
            value={rasm}
            type="text"
            onChange={(e) => setRasm(e.target.value)}
            placeholder="url"
          />
        </div>
        <div>
          name: <br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div>
          published: <br></br>
          <input
            type="text"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
            placeholder="published"
          />
        </div>
        <div>
          author: <br></br>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="author"
          />
        </div>
      </Modal.Body>

      <Button
        onClick={() => {
          if (rasm === '' || name === '' || published === '' || author === '') {
            alert('Writed input All');
          } else {
            props.onHide();
            setRasm('');
            setName('');
            setPublished('');
            setAuthor('');
            setMovie([
              ...movie,
              {
                id: movie.length + 1,
                rasm: rasm,
                name: name,
                published: published,
                author: author,
              },
            ]);
          }
        }}
      >
        Add
      </Button>
    </Modal>
  );
}
function Btn() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button
        style={{ position: 'fixed' }}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        +
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Btn;
