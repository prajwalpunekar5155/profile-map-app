import React, { useState } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";
import SearchFilter from "../components/SearchFilter";

const HomePage = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profiles
      </Typography>
      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <SearchFilter
          profiles={profiles}
          setFilteredProfiles={setFilteredProfiles}
        />
      </Paper>
      <Grid container spacing={2}>
        {filteredProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <ProfileCard
              profile={profile}
              onSummaryClick={() => setSelectedProfile(profile)}
            />
          </Grid>
        ))}
      </Grid>
      {selectedProfile && (
        <Paper style={{ marginTop: "20px", padding: "20px" }}>
          <MapComponent location={selectedProfile.address} />
        </Paper>
      )}
    </Container>
  );
};

export default HomePage;
