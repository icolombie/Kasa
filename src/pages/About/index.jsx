import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Image2 from "../../assets/Image2.png"
import Footer from "../../components/Footer"
import AboutCollapse from "../../components/AboutCollapse"

function About() {
    return (
      <div className="about">
          <Header />
          <Banner imageUrl={Image2} />
          <div className="about_content">
              <AboutCollapse title="Fiabilité">
                <p className="about_content-info">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </AboutCollapse>
              <AboutCollapse title="Respect">
                <p className="about_content-info">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </AboutCollapse>
              <AboutCollapse title="Service">
                <p className="about_content-info">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
              </AboutCollapse>
              <AboutCollapse title="Sécurité">
                <p className="about_content-info">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que nos standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </AboutCollapse>
          </div>
          <Footer />
      </div>
    )
  }
  
  export default About