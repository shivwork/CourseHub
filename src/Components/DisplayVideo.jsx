import React from 'react';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css';

const videoSrc = {
    type: "video",
    sources: [
        {
            src: "yWtFb9LJs3o",
            provider: "youtube"
        }
    ]
};

const DisplayVideo = () => (
    <Plyr source={videoSrc} />
    // <ReactPlayer
    //     className='react-player'
    //     url="https://www.youtube.com/watch?v=cLloxSDh_2g&ab_channel=ClusterMusic"
    //     width='552px'
    //     height='440px'
    //     controls="true"
    // />
);

export default DisplayVideo;