import React, { useState } from "react";
import Menubar from "./menubar/Menubar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className="d-flex">
      <Menubar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div
        className="p-4"
        style={{
          marginLeft: isCollapsed ? "70px" : "250px",
          width: "100%",
          transition: "margin-left 0.3s ease"
        }}
      >
        <h1>Welcome to Billing Software</h1>
        <p>Select an option from the sidebar to manage clients, invoices, or view reports.</p>
      </div>
    </div>
  );
}

export default App;
