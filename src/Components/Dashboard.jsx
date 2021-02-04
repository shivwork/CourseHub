import React from 'react';
import Sidebar from './Sidebar';
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styling/dashboard.css';

import { courseList } from '../Utils/mockData';

const Dashboard = () => (
    <Container className="page-container">
        <Sidebar />
        <div className="page-content">
            <h3>Course List </h3>

            <CardColumns>
                {courseList && (
                    courseList.map((data) => (
                        <>
                            <Link to="course">
                                <Card>
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text className="cource-description">
                                            {data.description}
                                        </Card.Text>
                                        <Card.Text className="price">
                                            {data.price}
                                        </Card.Text>
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