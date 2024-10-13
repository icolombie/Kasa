import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Image2 from "../../assets/Image2.png";
import Footer from "../../components/Footer";
import Collapse from "../../components/Collapse";
import "./about.css";

function About() {
  return (
    <div className="about">
      <Header />
      <Banner
        className="about-banner"
        imageUrl={Image2}
        text="Chez vous, partout et ailleurs"
        styleType="style2"
      />
      <div className="about_content">
        <Collapse title="Fiabilité" styleType="style2">
          <p className="about_content-info">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" styleType="style2">
          <p className="about_content-info">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service" styleType="style2">
          <p className="about_content-info">
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </Collapse>
        <Collapse title="Sécurité" styleType="style2">
          <p className="about_content-info">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            nos standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
}

export default About;
