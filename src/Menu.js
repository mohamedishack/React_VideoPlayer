import React from "react";

const Menu = ({ onSelectVideo, videos }) => {
  return (
    <form onClick={(e) => onSelectVideo(e.target.value)}>
      {videos.map((element, index) => (
        <div className="video-inputs">
          <input key={index} type="radio" name="src" value={element} />
          {element}
        </div>
      ))}
    </form>
  );
};

export default Menu;
