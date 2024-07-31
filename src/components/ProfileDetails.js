import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ProfileDetails = ({ profile }) => {
  const [locationName, setLocationName] = useState("Loading location...");

  useEffect(() => {
    const fetchLocationName = async () => {
      if (profile) {
        const lat = profile.address.lat;
        const lng = profile.address.lng;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );
          const data = await response.json();
          if (data && data.address && data.address.city) {
            setLocationName(data.address.city);
          } else {
            setLocationName("City not found");
          }
        } catch (error) {
          console.error("Error fetching location name:", error);
          setLocationName("Error fetching location");
        }
      }
    };

    fetchLocationName();
  }, [profile]);

  if (!profile) return <p>Loading...</p>;

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 4, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={profile.photo}
        alt={profile.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="subtitle2" color="text.secondary">
            Address:
          </Typography>
          <Typography variant="body2">{locationName}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
