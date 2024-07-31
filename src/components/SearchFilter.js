import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  }, [searchQuery, profiles, setFilteredProfiles]);

  return (
    <div className="search-filter">
      <TextField
        label="Search Profiles By Name"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
};

export default SearchFilter;
