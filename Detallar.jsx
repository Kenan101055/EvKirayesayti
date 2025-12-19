import React from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../evnebilimne.json";

function PropertyDetail() {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) return <p>Ev tapılmadı</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Geri</Link>
      <h1>{property.title}</h1>
      <img src={property.image} alt={property.title} style={{ width: "20%" }} />
      <p>Qiymət: {property.price} AZN / ay</p>
      <p>Otaq sayı: {property.rooms}</p>
      <p>Şəhər: {property.location}</p>
      <p>Təsvir: {property.description}</p>
    </div>
  );
}

export default PropertyDetail;
