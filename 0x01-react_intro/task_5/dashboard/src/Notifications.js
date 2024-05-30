import React, { useRef, useEffect } from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export default function Notifications() {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const closeButton = closeButtonRef.current;

    const handleClick = () => {
      console.log("Close button has been clicked");
    };

    if (closeButton) {
      closeButton.addEventListener("click", handleClick);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", handleClick);
      }
    };
  }, []);

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
        ref={closeButtonRef}
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
