import Header from "../../components/Header"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Footer from '../../components/Footer'
import ErrorPage from "../../pages/ErrorPage";

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
    return <ErrorPage />;
  }

  const formatAddress = (location) => {
    const [region, city] = location.split(' - ');
    if (city.startsWith('Paris')) {
      const arrondissement = city.split(' ')[1];
      const arrondissementNumber = parseInt(arrondissement, 10);
      return { formattedAddress: `Paris, ${region}`, city: 'Paris', arrondissement: arrondissementNumber };
    }
    return { formattedAddress: `${city}, ${region}`, city };
  };

  const { formattedAddress, city, arrondissement } = formatAddress(logement.location);


  
   
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

    return (
     
            <div>
              <Header />
              <div className="location">
              
              <ImageCarousel images={logement.pictures} className="carousel"/>
              <div className="location_content">
                <div className="location_content-title">
                  <h1>{logement.title}</h1>
                  <p>{formattedAddress}</p>
                </div>
                <div className="location_content-host">
                  <p>{logement.host.name}</p>
                  <img src={logement.host.picture} alt="host"/>
                </div>
              </div>
              <div className="location_info">
                <ul className="tags_list">
                  {logement.tags.map((tag, index) => (
                  <li key={index} className="tags_list-item">{tag}</li>
                  ))}
                  <li className="tags_list-item">
                  {city}
                  {arrondissement && ` ${arrondissement}`}
                  </li>
                </ul>
                <p className="location_info-rating">{renderStars(logement.rating)}</p>
              </div>
              <div className="details">
              <Collapse title="Description">
              <p className="description_content">{logement.description}</p>
              </Collapse>
              <Collapse title="Equipements" className="details_collapse-title">
              <ul className="equipment_list">
                {logement.equipments.map((equipment, index) => (
                <li key={index} className="equipment_list-item">{equipment}</li>
                ))}</ul>
              </Collapse>
              </div>
            </div>
                <div className="footer_container">
               <Footer />
               </div>
               </div>
    )
  }
  
  export default Location