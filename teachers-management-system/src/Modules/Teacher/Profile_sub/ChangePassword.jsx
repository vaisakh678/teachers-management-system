import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";
import "./css/change-password.css";

function ChangePassword({ setSubProfile }) {
  return (
    <div className="change-password">
      <div className="title">
        <div>
          <Button onClick={() => setSubProfile("default")} variant="text">
            <ArrowBackIcon />
          </Button>
        </div>
        <h1>Change Password</h1>
      </div>
      <form action="">
        <div className="field">
          <div className="field-item">
            <TextField
              id="standard-basic"
              label="New password"
              variant="standard"
              size="small"
            />
          </div>

          <div className="field-item">
            <TextField
              id="standard-basic"
              label="Conform password"
              variant="standard"
              size="small"
            />
          </div>

          <div className="field-item">
            <Button size="small" variant="contained">
              Save changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
