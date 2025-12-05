import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyCarousel2 from './components/MyCarousel2';
import MyNewExit from './components/MyNewExit';
import OtherToExplore from './components/OtherToExplore';
import MyFooter from './components/MyFooter';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid className="bg-dark text-white p-0">
        <MyNavbar />
        <MyCarousel />
        <MyCarousel2 />
        <MyNewExit />
        <OtherToExplore />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
