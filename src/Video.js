import React from "react";

const Video = ({ video }) => {
  return (
    <div>
      <video src={video} loop controls autostart="true" autoPlay muted />
    </div>
  );
};

export default Video;
