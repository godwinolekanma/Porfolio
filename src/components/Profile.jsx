import React from "react";
import profile from "../assets/Profile.png";

function Profile() {
  return (
    <div className="image-container " style={{ alignSelf: "center" }}>
      <img src={profile} className="image-resize" />
    </div>
  );
}

export default Profile;
