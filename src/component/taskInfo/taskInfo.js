import React from "react";
import "./taskInfo.css";

export default function TaskInfo() {
  return (
    <div className="task">
      <div className="about">
        <p id="word">About Task</p>
        <div id="line"></div>
      </div>
      <div className="info">
        <p id="info">
          YOLOv5와 OpenCV를 이용하여
          <br />
          버스 내 인원수를 파악하고, 이를 기반으로
          <br />
          버스 내 혼잡도를 계산하여 알려줍니다.
        </p>
      </div>
    </div>
  );
}
