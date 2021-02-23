import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup, faLanguage, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, fas, far } from '@fortawesome/free-brands-svg-icons';
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
                    <i class="fas fa-sign-out-alt"></i>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>

                <NavText>
                    My Courses
                    <hr />
                </NavText>
            </NavItem>
            <NavItem eventKey="logout" className="logout-button" style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <NavIcon>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </NavIcon>
                <NavText  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <Button
                        className="logout-button-blue"
                        fullWidth="true"
                        variant="contained"
                        style={{
                            backgroundColor: '#329BF7',
                            color: 'white',
                            fontWeight: '600',
                            width: '100%',
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            height: '100%'
                        }}
                        size="large"
                    >
                        Logout
                    </Button>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
);

export default Sidebar;