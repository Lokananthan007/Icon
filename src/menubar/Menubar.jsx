// Menubar.jsx
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaFileInvoice,
  FaCog,
  FaBars
} from "react-icons/fa";
import "./Menubar.css";

function Menubar({ isCollapsed, toggleSidebar }) {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""} d-flex flex-column`}>
      <div
        className={`toggle-btn ${isCollapsed ? "collapsed" : ""}`}
        onClick={toggleSidebar}
      >
        <FaBars />
      </div>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/dashboard"><FaTachometerAlt className="me-2" /> {!isCollapsed && "Dashboard"}</Nav.Link>
        <Nav.Link href="/clients"><FaUserFriends className="me-2" /> {!isCollapsed && "Clients"}</Nav.Link>
        <Nav.Link href="/invoices"><FaFileInvoice className="me-2" /> {!isCollapsed && "Invoices"}</Nav.Link>
        <Nav.Link href="/settings"><FaCog className="me-2" /> {!isCollapsed && "Settings"}</Nav.Link>
      </Nav>
    </div>
  );
}

export default Menubar;
