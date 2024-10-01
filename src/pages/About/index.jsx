import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Image2 from "../../assets/Image2.png"
import Footer from "../../components/Footer"

function About() {
    return (
      <div>
          <Header />
          <Banner imageUrl={Image2} />
          <Footer />
      </div>
    )
  }
  
  export default About