import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import LoginContainer from './Container/LoginContainer';
import DashboardContainer from './Container/DashboardContainer';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard.jsx';
import CourseDetail from './Components/CourseDetail';

import './App.css';
import './Styling/global.css';

function App() {
  return (
    <Container fluid className="App">
      <Router>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/course" component={CourseDetail} />
      </Router>
    </Container>
  );
}

export default App;
