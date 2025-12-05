import { Container, Row, Col } from 'react-bootstrap';

const MyCarousel = function () {
  return (
    <>
      <Container>
        <Row>
          <h3 className="mt-3">Novità</h3>
          <hr />
          <Col xs={6}>
            <p className="m-0">NUOVA STAZIONE RADIO</p>
            <p>
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
            </p>
            <img
              className="w-100"
              src="./src/assets/images/1a.png"
              alt=""
            ></img>
          </Col>
          <Col xs={6}>
            <p className="m-0">NUOVA STAZIONE RADIO</p>
            <p>Ecco la nuova casa della musica latina</p>
            <img
              className="w-100"
              src="./src/assets/images/1b.png"
              alt=""
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyCarousel;
