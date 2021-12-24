import './App.css';
import Main from './component/Main';
import Navigation from './component/Navigation';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Row>
          <Col>
          <Main/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
