import React from "react";
import "./AppDownload.css";

import playStore from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato app
      </p>

      <div className="app-download-platforms">
        <img src={playStore} alt="google-play-store" />
        <img src={appStore} alt="apple-app-store" />
      </div>
    </div>
  );
};

export default AppDownload;
