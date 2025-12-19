import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <>
      <input
        type="text"
        placeholder="Şəhər üzrə axtarış..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{alignSelf: "center", padding: "5px", width: "200px", marginBottom: "20px" }}
      />
    </>
  );
}

export default SearchBar;
