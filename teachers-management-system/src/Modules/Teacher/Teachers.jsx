import React, { useState } from "react";
import SideBar from "./SideBar";
import "./css/teachres.css";
// import Profile from "./Profile";
import ProfileNavigator from "./ProfileNavigator";
import Notification from "./Notification";
import Events from "./Events";
import Vacancy from "./Vacancy";
import Transfers from "./Transfers";
import ApplicationStatus from "./ApplicationStatus";

function Teachers() {
  const [selected_page, setSelected_page] = useState("profile");

  return (
    <div className="teachr">
      <SideBar
        selected_page={selected_page}
        setSelected_page={setSelected_page}
      />

      {/* {selected_page === "profile" && <Profile setSubProfile={setSubProfile} />} */}
      {selected_page === "profile" && <ProfileNavigator />}
      {selected_page === "notification" && <Notification />}
      {selected_page === "events" && <Events />}
      {selected_page === "vacancy" && <Vacancy />}
      {selected_page === "transfers" && <Transfers />}
      {selected_page === "stat" && <ApplicationStatus />}
    </div>
  );
}

export default Teachers;
