import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={profile.photo}
        alt={profile.name}
      />
      <CardContent>
        <Typography variant="h6">{profile.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSummaryClick(profile)}
          style={{ marginTop: "10px" }}
        >
          Show on Map
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
