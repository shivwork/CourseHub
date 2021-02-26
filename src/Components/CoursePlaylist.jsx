import React from 'react';
import { Media } from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { fab, fas, far } from '@fortawesome/free-brands-svg-icons'

import { Container, Card, CardColumns, Row, Col } from 'react-bootstrap';
import { coursePlaylist } from '../Utils/mockData';

const CoursePlaylist = ({ image, title, duration, description }) => (
    <ul className="list-unstyled">
        {coursePlaylist.map((data) => (
            <Row className="playlist-wrapper">
                <Col md="3" className="image-column">
                    <Card.Img
                        className="playlist-image"
                        width="130px"
                        height="160px"
                        variant="top" src={data.image}
                    />
                </Col>
                <Col md="9" className="content-column">
                    <div>
                        <h6 className="course-title">
                            {data.title}
                        </h6>

                        <p className="duration-wrapper"> <FontAwesomeIcon icon={faClock} /> <span className="course-duration">{data.classDuration}</span> </p>
                        <p className="course-desc">{data.description}</p>
                        <LinearProgress style={{ height: '10px', borderRadius: '13px' }} className="progress-bar" variant="determinate" value={100} />
                    </div>
                </Col>
            </Row>
        ))}
    </ul>
);

export default CoursePlaylist;