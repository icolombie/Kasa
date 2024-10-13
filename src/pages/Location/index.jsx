import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import ErrorPage from "../../pages/ErrorPage";

const Location = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((logement) => logement.id === id);
        if (foundLogement) {
          setLogement(foundLogement);
        } else {
          setHasError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHasError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (hasError) {
    return <ErrorPage />;
  }

  const formatAddress = (location) => {
    const [region, city] = location.split(" - ");
    if (city.startsWith("Paris")) {
      const arrondissement = city.split(" ")[1];
      const arrondissementNumber = parseInt(arrondissement, 10);
      return {
        formattedAddress: `Paris, ${region}`,
        city: "Paris",
        arrondissement: arrondissementNumber,
      };
    }
    return { formattedAddress: `${city}, ${region}`, city };
  };

  const { formattedAddress, city, arrondissement } = formatAddress(
    logement.location
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="location_page">
      <Header />
      <div className="location">
        <ImageCarousel images={logement.pictures} className="carousel" />
        <div className="location_container">
          <div className="location_content">
            <div className="location_content-title">
              <h1>{logement.title}</h1>
              <p>{formattedAddress}</p>
            </div>
            <ul className="tags_list">
              {logement.tags.map((tag, index) => (
                <li key={index} className="tags_list-item">
                  {tag}
                </li>
              ))}
              <li className="tags_list-item">
                {city}
                {arrondissement && ` ${arrondissement}`}
              </li>
            </ul>
          </div>
          <div className="location_info">
            <p className="location_info-rating">
              {renderStars(logement.rating)}
            </p>
            <div className="location_info-host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="host" />
            </div>
          </div>
        </div>
        <div className="details">
          <Collapse title="Description" styleType="style1">
            <p className="description_content">{logement.description}</p>
          </Collapse>
          <Collapse title="Equipements" styleType="style1">
            <ul className="equipment_list">
              {logement.equipments.map((equipment, index) => (
                <li key={index} className="equipment_list-item">
                  {equipment}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
