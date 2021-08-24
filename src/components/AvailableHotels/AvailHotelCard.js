import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './AvailHotelCard.css';

const AvailHotelCard = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((response) => setHotel(response));
  }, []);

  if (hotel === null) {
    return <h3>404 Not Found</h3>;
  }
  return (
    <>
      <section className="avail-hotel-block">
        <div className="container">
          <NavLink to="/">Back</NavLink>
          <div className="avail-hotel-cards">
            <div className="avail-hotel-header">
              <h3>{hotel.name}</h3>
            </div>
            <div className="avail-hotel-item">
              <img src={hotel.imageUrl} alt="Hotel" className="avail-hotel-img" />
              <div className="avail-hotel-text">
                <span>City: {hotel.city}</span>
                <span>Country: {hotel.country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailHotelCard;
