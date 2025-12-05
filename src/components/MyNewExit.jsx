import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleAlbum from './SingleAlbum';

const MyNewExit = function () {
  const [album, setAlbum] = useState([]);

  const getAlbum = function () {
    const URL =
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen';
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('la chiamata non è ok: ' + response.status);
        }
      })
      .then((arrayOfAlbum) => {
        console.log('Album a DB', arrayOfAlbum);
        setAlbum(arrayOfAlbum.data);
      })
      .catch((err) => {
        console.log('errore nella chiamata', err);
      });
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <Container>
      <h3 className="mt-5">Nuove uscite</h3>

      <Row>
        {album.map((album) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={album.id}>
            <SingleAlbum album={album} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyNewExit;
