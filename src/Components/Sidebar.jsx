import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Link } from 'react-router-dom'
import '../Styling/sidebar.css'

const Sidebar = () => (
    <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
        className="sidebar"
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    My Courses
            </NavText>
            </NavItem>
            <NavItem eventKey="logout" className="logout-button" style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText  >
                    Logout
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
);

export default Sidebar;