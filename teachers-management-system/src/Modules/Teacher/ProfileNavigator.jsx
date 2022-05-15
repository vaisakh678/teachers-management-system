import React, { useState } from "react";
import Profile from "./Profile_sub/Profile";
import ChangePassword from "./Profile_sub/ChangePassword";
import EditProfile from "./Profile_sub/EditProfile";

function ProfileNavigator() {
  const [subProfile, setSubProfile] = useState("default");
  return (
    <div>
      {subProfile === "default" && <Profile setSubProfile={setSubProfile} />}
      {subProfile === "change-pwd" && (
        <ChangePassword setSubProfile={setSubProfile} />
      )}
      {subProfile === "edit-pro" && (
        <EditProfile setSubProfile={setSubProfile} />
      )}
    </div>
  );
}

export default ProfileNavigator;
