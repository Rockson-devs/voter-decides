import Topbar from "./components/global/Topbar/Topbar";
import ProSidebar from "./components/global/Sidebar/ProSidebar";
import { Routes, Route } from "react-router-dom";
import Presidential from "./scenes/Presidential";
import Parliamentary from "./scenes/Parliamentary";
import VDashboard from "./scenes/VDashboard/vdashboard";

function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="content">
        <ProSidebar />
        <div className="content-routes">
          <Routes>
            <Route path="/" element={<VDashboard />} />
            <Route path="/presidential" element={<Presidential />} />
            <Route path="/parliamentary" element={<Parliamentary />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
