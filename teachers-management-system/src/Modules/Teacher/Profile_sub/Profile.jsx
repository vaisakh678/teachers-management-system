import React from "react";
import { Button } from "@mui/material";
import CircularProgressWithLabel from "../../../helper/CircularProgressWithLabel";
import "./css/profile.css";

function Profile({ setSubProfile }) {
  let percentage = 94;

  return (
    <div className="profile">
      <h1>Welcome Back!!</h1>
      <div className="compelection-data">
        <div className="progress-bar">
          <div>
            <CircularProgressWithLabel value={percentage} />
          </div>
        </div>
        <h3>Great! Your profile is {percentage}% Complete</h3>
      </div>
      <h2>About Contact Address Qualification Achievements Work experience</h2>

      <div className="person-details">
        <ul>
          <li>
            <div className="label">Name </div>
            <div className="label-value">hello world</div>
          </li>
          <li>
            <div className="label">Dob </div>
            <div className="label-value">---</div>
          </li>
          <li>
            <div className="label">Gender </div>
            <div className="label-value">-----</div>
          </li>
          <li>
            <div className="label">Category</div>
            <div className="label-value">---</div>
          </li>
        </ul>
      </div>

      <div className="btns">
        <div className="btn">
          <Button variant="contained" onClick={() => setSubProfile("edit-pro")}>
            Edit Profile
          </Button>
        </div>
        <div className="btn">
          <Button
            variant="contained"
            onClick={() => setSubProfile("change-pwd")}
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
