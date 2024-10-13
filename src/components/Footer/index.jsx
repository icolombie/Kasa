import K from "../../assets/K-white.png";
import house from "../../assets/house-white.png";
import door from "../../assets/door-white.png";
import s from "../../assets/s-white.png";
import a from "../../assets/a-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={K} alt="lettre K" className="footer_logo--K" />
        <span className="footer_logo--houseGroup">
          <img src={house} alt="logo maison" className="footer_logo--house" />
          <img src={door} alt="logo porte" className="footer_logo--door" />
        </span>
        <img src={s} alt="lettre s" className="footer_logo--s" />
        <img src={a} alt="lettre a" className="footer_logo--a" />
      </div>
      <p className="footer_text">&copy; 2020 Kasa. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
