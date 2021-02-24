import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import Sidebar from './Sidebar';

import '../Styling/courseDetail.css';

import DisplayVideo from './DisplayVideo';
import CoursePlaylist from './CoursePlaylist';

const CourseDetail = () => (
    <Container className="page-container course-detail-wrapper">
        <div className="header-margin"></div>
        <Sidebar />
        <div className="page-content">
            <Row>
                <Col md={7} className="show-video">
                    <DisplayVideo />
                </Col>
                <Col md={5} className="list-video">
                    <CoursePlaylist />
                </Col>
            </Row>
        </div>
    </Container>
);

export default CourseDetail;