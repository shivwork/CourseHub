import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Button from '@material-ui/core/Button';

import '../Styling/courseDetail.css';

import DisplayVideo from './DisplayVideo';
import CoursePlaylist from './CoursePlaylist';

const CourseDetail = () => (
    <div className="page-container course-detail-wrapper">
        <div className="header-margin"></div>
        <Sidebar />
        <div className="page-content">
            <Row className="page-row">
                <Col md={7} className="show-video">
                    <DisplayVideo />
                    <Button style={{ marginTop: '3em', backgroundColor: '#329BF7' }} fullWidth="true" variant="contained" color="primary">
                        <span>Sample.pdf </span>
                        <FontAwesomeIcon icon={faDownload} />
                    </Button>
                </Col>
                <Col md={5} className="list-video">
                    <CoursePlaylist />
                </Col>
            </Row>
        </div>
    </div>
);

export default CourseDetail;