import { useState } from "react";
import Menu from "./Menu";
import Video from "./Video";
import "./App.css";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
const videoNames = Object.keys(videos);
const App = () => {
  const [video, selectVideo] = useState(videos.deer);
  function onSelectVideo(video) {
    selectVideo(videos[video]);
  }
  return (
    <div>
      <h6>Project6:Video Player</h6>
      <Menu videos={videoNames} onSelectVideo={onSelectVideo} />
      <Video video={video} />
    </div>
  );
};

export default App;
