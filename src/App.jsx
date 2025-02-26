import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './components/Browse';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App; 