import React, { useState } from "react";

const SearchField = ({ searchTitle }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    searchTitle(event.target.value);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchQuery}
        onChange={handleSearch}
        style={{
          width: "95%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "20px",
          boxSizing: "border-box",
          fontSize: "16px",
        }}
      />
    </div>
  );
};
export default SearchField;
