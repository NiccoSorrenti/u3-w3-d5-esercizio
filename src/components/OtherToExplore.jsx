import { Container, Row, Col } from 'react-bootstrap';

const exploreItems = [
  'Esplora per genere',
  'Decenni',
  "Attività e stati d'animo",
  'Worldwide',
  'Classifiche',
  'Audio spaziale',
  'Video musicali',
  'Nuovi artisti',
  'Hit del passato',
];

const OtherToExplore = () => {
  return (
    <Container className="mt-4">
      <h4 className="text-light mb-3">Altro da esplorare</h4>

      <Row>
        <Col>
          {exploreItems.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1f1f1f',
                color: '#F9586A',
                padding: '16px 20px',
                marginBottom: '12px',
                borderRadius: '12px',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#292929')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#1f1f1f')
              }
            >
              <span>{item}</span>
              <span
                style={{
                  color: '#ff2d55',
                  fontSize: '1.4rem',
                  marginLeft: '10px',
                }}
              >
                ›
              </span>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default OtherToExplore;
