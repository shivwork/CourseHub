import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { fab, fas, far } from '@fortawesome/free-brands-svg-icons'

import Sidebar from './Sidebar';
import { Container, Card, CardColumns, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styling/dashboard.css';

import { courseList } from '../Utils/mockData';

const Dashboard = () => (
    <Container fluid className="page-container">
        <Sidebar />
        <div className="page-content">

            <CardColumns>
                {courseList && (
                    courseList.map((data) => (
                        <>
                            <Link to="course">
                                <Card>
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Row className="course-info">
                                            <Card.Text className="class-count">
                                                <FontAwesomeIcon icon={faLayerGroup} />
                                                {data.classCount}
                                            </Card.Text>
                                            <Card.Text className="class-duration course-info-text">
                                                <FontAwesomeIcon icon={faClock} />
                                                {data.classDuration}
                                            </Card.Text>
                                            <Card.Text className="class-lang course-info-text">
                                                <FontAwesomeIcon size='2x' icon={faLanguage} />
                                                <span className="lang">
                                                    {data.classLanguage}
                                                </span>
                                            </Card.Text>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Link>
                        </>
                    ))
                )}
            </CardColumns>
        </div>
    </Container>
);

export default Dashboard;