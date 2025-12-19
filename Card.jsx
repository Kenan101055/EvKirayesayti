import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card" style={{ border: "10px solid #626262aa", padding: "23x", margin: "10px" }}>
      <img src={property.image} alt={property.title} style={{ width: "20%" }} />
      <h2>{property.title}</h2>
      <p>{property.price} AZN / ay</p>
      <p>{property.rooms} otaq</p>
      <p>Şəhər: {property.location}</p>
      <Link to={`/property/${property.id}`}>Ətraflı</Link>
    </div>
  );
}

export default PropertyCard;
