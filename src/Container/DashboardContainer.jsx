import React, { PureComponent } from 'react';
import Dashboard from '../Components/Dashboard';

class DashboardContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    dashboardHandler = () => {

    };

    render() {
        return (
            <Dashboard />
        )
    }
}

export default DashboardContainer;