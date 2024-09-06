import React from 'react';

const Video = ({videoSrc}) => {
    return (
        <div>
            <video loop controls autoPlay muted src={videoSrc} />
        </div>
    );
};

export default Video;