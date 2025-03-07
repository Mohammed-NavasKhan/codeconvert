import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Home from './pages/Home';
import CodeConverter from './pages/CodeConverter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modernisation" element={<CodeConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;