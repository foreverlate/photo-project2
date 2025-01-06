import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './pages/Home';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Gallery from './pages/Gallery';

    export default function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/travel" element={<Gallery category="travel" />} />
              <Route path="/gallery/nature" element={<Gallery category="nature" />} />
              <Route path="/gallery/events" element={<Gallery category="events" />} />
              <Route path="/gallery/portrait" element={<Gallery category="portrait" />} />
            </Routes>
          </div>
        </Router>
      );
    }
