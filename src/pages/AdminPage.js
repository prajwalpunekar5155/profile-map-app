import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: { lat: "", lng: "" },
  });
  const [editingProfile, setEditingProfile] = useState(null);

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: { lat: "", lng: "" },
    });
  };

  const handleEditProfile = (profile) => {
    setNewProfile(profile);
    setEditingProfile(profile.id);
  };

  const handleUpdateProfile = () => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === editingProfile
          ? { ...newProfile, id: editingProfile }
          : profile
      )
    );
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: { lat: "", lng: "" },
    });
    setEditingProfile(null);
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={newProfile.name}
            onChange={(e) =>
              setNewProfile({ ...newProfile, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Photo URL"
            variant="outlined"
            fullWidth
            value={newProfile.photo}
            onChange={(e) =>
              setNewProfile({ ...newProfile, photo: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={newProfile.description}
            onChange={(e) =>
              setNewProfile({ ...newProfile, description: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Latitude"
            type="number"
            variant="outlined"
            fullWidth
            value={newProfile.address.lat}
            onChange={(e) =>
              setNewProfile({
                ...newProfile,
                address: { ...newProfile.address, lat: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Longitude"
            type="number"
            variant="outlined"
            fullWidth
            value={newProfile.address.lng}
            onChange={(e) =>
              setNewProfile({
                ...newProfile,
                address: { ...newProfile.address, lng: e.target.value },
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          {editingProfile ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateProfile}
              style={{ marginTop: "10px" }}
            >
              Update Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProfile}
              style={{ marginTop: "10px" }}
            >
              Add Profile
            </Button>
          )}
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </TableCell>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.description}</TableCell>
                <TableCell>{profile.address.lat}</TableCell>
                <TableCell>{profile.address.lng}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditProfile(profile)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteProfile(profile.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminPanel;
