import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../Styling/sidebar.css'

const Sidebar = () => (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
        <div className="sidebar-sticky"> My course</div>
        <Nav.Item>
            <Nav.Link eventKey="History">History </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="Recent">Recent</Nav.Link>
        </Nav.Item>
    </Nav >
);

export default Sidebar;