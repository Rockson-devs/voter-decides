import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./ProSidebar.css";
import { Link } from "react-router-dom";

const ProSidebar = () => {
  return (
    <div className="prosidebar">
      <Sidebar className="sidebar">
        <Menu>
          <MenuItem component={<Link to="/" />}>Voter Dashboard</MenuItem>
          <MenuItem component={<Link to="/presidential" />}>
            Presidential
          </MenuItem>
          <MenuItem component={<Link to="/parliamentary" />}>
            Parliamentary
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProSidebar;
