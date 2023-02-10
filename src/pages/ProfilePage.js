import React, { useEffect } from "react";

const ProfilePage = () => {
  useEffect(() => {
    document.title = "profile";
  }, []);
  return <div>Profile Page</div>;
};

export default ProfilePage;
