import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import './App.css'; // Import the new CSS file


// Main App component that sets up the Router
function App() {
  return (
    <Router>
      <RoutedAppContent />
    </Router>
  );
}

// Component that lives inside Router context and can use hooks like useLocation
function RoutedAppContent() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const firstRender = useRef(true); // To prevent animation on initial page load

  useEffect(() => {
    // Skip animation on initial render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Trigger animation on route change
    setIsTransitioning(true);

    // Remove the animation class after the animation duration (must match CSS)
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // Must match CSS animation duration (0.4s = 400ms)

    return () => clearTimeout(timer); // Cleanup timer
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <div className={`page-transition-wrapper ${isTransitioning ? 'fade-transition-active' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
