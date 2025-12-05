import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleAlbum = function (props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{ width: '12rem' }} className="mb-4 shadow-sm">
            <Card.Img
              variant="top"
              src={props.album.album.cover_medium}
              alt={props.album.title}
            />

            <Card.Body>
              <Card.Title style={{ fontSize: '0.9rem' }}>
                {props.album.title}
              </Card.Title>

              <Card.Text style={{ fontSize: '0.8rem', color: '#555' }}>
                {props.album.artist.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleAlbum;
