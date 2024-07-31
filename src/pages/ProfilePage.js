import React from "react";
import { useParams } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";

const ProfilePage = ({ profiles }) => {
  const { id } = useParams();

  // Ensure profiles is defined and is an array before using .find()
  const profile = profiles?.find((p) => p.id === parseInt(id, 10));

  return (
    <div className="profile-page">
      {profile ? (
        <ProfileDetails profile={profile} />
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
};

export default ProfilePage;
