import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import Banner from "../../components/Banner"
import Image1 from "../../assets/Image1.png"

function Home() {
    return (
        
        <div>
          <Header />
          <Banner imageUrl={Image1} text="Chez vous, partout et ailleurs" />
            
            <Card />
          <Footer />
        </div>
    )
  }
  
  export default Home