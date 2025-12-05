import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import MyCarousel2 from './components/MyCarousel2';
import MyNewExit from './components/MyNewExit';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <MyCarousel2 />
      <MyNewExit />
    </>
  );
}

export default App;
