import React from 'react';
import Video from './Video';
import Menu from './Menu';

const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  };
  

const App = () => {
    return (
        <div>
            <h1>VIDEO PLAYER</h1>
            <Menu />
            <Video />
            
        </div>
    );
};

export default App;