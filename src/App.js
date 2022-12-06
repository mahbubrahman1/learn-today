import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/custom.scss'
import Courses from './pages/Courses';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
