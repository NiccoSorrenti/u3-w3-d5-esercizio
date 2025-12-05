import { Container, Row, Col } from 'react-bootstrap';

const MyCarousel2 = function () {
  return (
    <>
      <Container bg="dark" data-bs-theme="dark">
        <Row>
          <h3 className="mt-3">Nuovi episodi radio</h3>
          <Col>
            <img className="w-100" src="./src/assets/images/2a.png" alt="" />
          </Col>
          <Col>
            <img className="w-100" src="./src/assets/images/2b.png" alt="" />
          </Col>
          <Col>
            <img className="w-100" src="./src/assets/images/2c.png" alt="" />
          </Col>
          <Col>
            <img
              className="d-none d-md-block w-100"
              src="./src/assets/images/2d.png"
              alt=""
            />
          </Col>
          <Col>
            <img
              className="d-none d-md-block w-100"
              src="./src/assets/images/2e.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyCarousel2;
