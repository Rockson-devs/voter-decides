import React from "react";
// import Logout from "../Logout/logout";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="container">
      <h2 className="logo">
        VOTER <br />
        DECIDES
      </h2>
      <div className="v-details">
        <img src="../../assets/images/kofi.jpg" alt="" />
        <h4 className="v-name">Rockson Boateng Omane</h4>
        {/* <Logout /> */}
      </div>
    </div>
  );
};

export default Topbar;
