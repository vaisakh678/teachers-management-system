import React from "react";
import "./css/side-bar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar({ selected_page, setSelected_page }) {
  console.log(selected_page);
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
    console.log("log outtttt.");
  }

  return (
    <div className="side-bar">
      <div className="avatar">
        <div className="avatar-icon">
          <AccountCircleOutlinedIcon fontSize="large" />
        </div>
        {/* Lakshmi */}
        Marion Cotillard
      </div>

      <ul>
        <li>
          <div
            onClick={() => setSelected_page("profile")}
            className={
              selected_page === "profile"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <PersonIcon className="icon" />
            Profile
          </div>
        </li>

        <li>
          <div
            onClick={() => setSelected_page("notification")}
            className={
              selected_page === "notification"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <NotificationsNoneIcon className="icon" />
            Notification
          </div>
        </li>

        <li>
          <div
            onClick={() => setSelected_page("events")}
            className={
              selected_page === "events"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <EmojiEventsIcon className="icon" />
            Events
          </div>
        </li>

        <li>
          <div
            onClick={() => setSelected_page("vacancy")}
            className={
              selected_page === "vacancy"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <HourglassEmptyIcon className="icon" />
            Vacancy
          </div>
        </li>

        <li>
          <div
            onClick={() => setSelected_page("transfers")}
            className={
              selected_page === "transfers"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <AddBoxIcon className="icon" />
            Transfers
          </div>
        </li>

        <li>
          <div
            onClick={() => setSelected_page("stat")}
            className={
              selected_page === "stat"
                ? "bar-item bar-item-selected"
                : "bar-item bar-item-hover"
            }
          >
            <AutorenewIcon className="icon" />
            Application stat
          </div>
        </li>

        <li>
          <div onClick={handleLogout} className="bar-item bar-item-hover">
            <LogoutIcon />
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
