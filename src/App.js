import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/index';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    document.documentElement.setAttribute('translate', 'no');
  }, []);

  return (
    <Router>
      <div>
      <AppRoutes />
      </div>
  </Router>

  );
}


export default App;
