import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("translate", "no");
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
