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
          width: "98%",
          padding: "10px 40px 10px 10px",
          border: "1px solid #ccc",
          borderRadius: "0px",
          boxSizing: "border-box",
          fontSize: "14px",
          marginTop:"5px",
        }}
      />
    </div>
  );
};
export default SearchField;
