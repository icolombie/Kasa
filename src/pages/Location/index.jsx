import Header from "../../components/Header"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from "../../components/Carousel";

const Location = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundLogement = data.find(logement => logement.id === id);
        setLogement(foundLogement);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>;
  }

    return (
     
            <div>
              <Header />
              <div className="location">
              
              <ImageCarousel images={logement.pictures} className="carousel"/>
              <h1>{logement.title}</h1>
              <p>{logement.description}</p>
              <p>Rating: {logement.rating}</p>
              <p>Host: {logement.host.name}</p>
              <p>Address: {logement.location}</p>
      
            </div>

            </div>
    )
  }
  
  export default Location