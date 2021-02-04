import React from 'react';
import ReactPlayer from 'react-player';

const DisplayVideo = () => (
    <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/watch?v=cLloxSDh_2g&ab_channel=ClusterMusic"
        width='552px'
        height='440px'
        controls="true"
    />
);

export default DisplayVideo;