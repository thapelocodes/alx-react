import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        id="closeButton"
        style={{
          position: "absolute",
          right: ".4em",
          top: ".4em",
          width: "50px",
          height: "50px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
