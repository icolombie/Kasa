import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import Banner from "../../components/Banner"
import Image1 from "../../assets/Image1.png"
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
        
        <div>
          <Header />
          <Banner imageUrl={Image1} text="Chez vous, partout et ailleurs" />
          <div className="gallery">
          {logements.map((logement) => (
          <Card key={logement.id} id={logement.id}  image={logement.cover} title={logement.title} />
          ))}
          </div>
          <Footer />
        </div>
    )
  }
  
