import React from "react";
import "./vdashboard.css";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const VDashboard = () => {
  return (
    <div className="vdashboard-container">
      <h3 className="dashboard-intro">Welcome to vDashboard</h3>
      <p className="dashboard-intro">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti{" "}
        <br />
        voluptatibus commodi error vitae ullam iusto quod quae eligendi, placeat{" "}
        <br />
        ipsam recusandae labore, adipisci enim ut ipsum aperiam non cumque
        assumenda consectetur! <br /> Deleniti illo libero numquam magnam,
        itaque quos
      </p>
      <div className="card-container">
        <Link to={"/presidential"} className="link">
          <div className="card">
            <ThumbUpIcon
              sx={{
                fontSize: 50,
                borderRadius: 2,
                pl: 7,
              }}
            />
            <div className="card-title">Presidential</div>
            <div className="card-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui
              fugit quisquam. Ab, exercitationem.
            </div>
          </div>
        </Link>
        <Link to={"/parliamentary"} className="link">
          <div className="card">
            <ThumbUpIcon
              sx={{
                fontSize: 50,
                borderRadius: 2,
                pl: 7,
              }}
            />
            <div className="card-title">Parliamentary</div>
            <div className="card-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui
              fugit quisquam. Ab, exercitationem.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VDashboard;
