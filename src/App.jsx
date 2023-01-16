import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './page/Dashboard';
import Login from './page/Login';


const App = () => {
  return (
    <Container fluid style={{ marginLeft: '0px', paddingLeft: '0px' }}>
    <Router>
      <Routes>
        <Route index path="/login" element={<Login title="Login" />} />
        <Route index path="/dashboard" element={<Dashboard title="Dashboard" />} />
      </Routes>
    </Router>
  </Container>
  );
}

export default App;
