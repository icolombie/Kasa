import React from "react";
import { Link } from "react-router-dom";
import K from "../../assets/K.png";
import house from "../../assets/house.png";
import door from "../../assets/door.png";
import s from "../../assets/s.png";
import a from "../../assets/a.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="header_nav">
      <Link to="/" className={activeLink === "/" ? "active-link" : ""}>
        Accueil
      </Link>
      <Link
        to="/about"
        className={activeLink === "/about" ? "active-link" : ""}
      >
        A propos
      </Link>
    </nav>
  );
};

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={K} alt="lettre K" className="header_logo--K" />
        <span className="header_logo--houseGroup">
          <img src={house} alt="logo maison" className="header_logo--house" />
          <img src={door} alt="logo porte" className="header_logo--door" />
        </span>
        <img src={s} alt="lettre s" className="header_logo--s" />
        <img src={a} alt="lettre a" className="header_logo--a" />
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
