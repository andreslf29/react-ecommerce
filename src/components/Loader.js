import React from "react";
import "../styles/Loader.scss";

const Loader = () => {
  return (
    <div className="loader__cont">
      <div className="loader-wrapper">
        <div className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>

        <div id="loader2" className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>

        <div id="loader3" className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
