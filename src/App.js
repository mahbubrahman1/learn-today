import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import './App.scss';

function App() {
  return (
    <motion.div style={{ overflowX: 'hidden' }}>
      <Router>
        <NavigationBar />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <Footer />
    </motion.div >
  );
}

export default App;
