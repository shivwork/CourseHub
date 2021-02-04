import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { coursePlaylist } from '../Utils/mockData';

const CoursePlaylist = () => (
    <ul className="list-unstyled">
        {coursePlaylist.map((data) => (
            <>
                <Link to="/course">
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={data.image}
                            alt="Generic placeholder"
                        />
                        <p>{data.title} <span>{data.duration}</span></p>
                    </Media>
                </Link>
                <hr />
            </>
        ))}

    </ul>
);

export default CoursePlaylist;