import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = function () {
  return (
    <footer
      style={{
        backgroundColor: '#323232',
        color: '#bbb',
        padding: '2rem 0',
        borderTop: '1px solid #333',
        marginTop: '3rem',
      }}
    >
      <Container>
        <Row className="gy-3">
          <Col xs={12}>
            <Col xs={12} style={{ opacity: 0.7 }} className="mb-3">
              Italia | English (UK)
            </Col>

            <Col xs={12} style={{ opacity: 0.7 }} className="mb-3">
              © {new Date().getFullYear()} Apple Inc. Tutti i diritti riservati.
            </Col>

            <div className="d-flex flex-wrap gap-3">
              <a href="#" style={linkStyle}>
                Condizioni del servizio internet
              </a>
              <span>|</span>
              <a href="#" style={linkStyle}>
                Apple Music e privacy
              </a>
              <span>|</span>
              <a href="#" style={linkStyle}>
                Avviso sui cookie
              </a>
              <span>|</span>
              <a href="#" style={linkStyle}>
                Supporto
              </a>
              <span>|</span>
              <a href="#" style={linkStyle}>
                Feedback
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 500,
};

export default MyFooter;
