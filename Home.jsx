import React, { useState } from "react";
import PropertyCard from "../components/Card";
import SearchBar from "../components/Searc";
import propertiesData from "../evnebilimne.json";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProperties = propertiesData.filter((p) =>
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <header>
        <nav>
          <h1>Ev-kirayə elanları</h1>
          <ul style={{display:"Flex",gap:"20px"}}>
            <a href="#" ><li style={{listStyle:"none"}}>Ev</li></a>
            <a href="#" ><li style={{listStyle:"none"}}>Bizim haqqımızda</li></a>
            <a href="#" ><li style={{listStyle:"none"}}>Bizlə əlaqə saxla</li></a>
          </ul>
        </nav>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
