import React, { useEffect, useState } from "react";
import "./busVideo.css";

export default function BusVideo() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get_weather", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="video">
      <div className="explanation">
        <p id="ex_video">Video</p>
        <p id="kor_ex_video">버스 내 혼잡도</p>
      </div>
      <div className="video_box">
        <video id="my_video" className="video-js" controls muted="muted">
          <source
            src="static/video/hls/index.m3u8"
            type="application/x-mpegURL"
          />
        </video>
        {/* <div className="type">
          <p id="green">여유</p>
          <p id="blue">보통</p>
          <p id="yellow">혼잡</p>
          <p id="red">매우 혼잡</p>
        </div> */}
        <div className="type">
          <p className="cal">인원수 : {data}</p>
          <p className="cal">기온 : {data}</p>
          <p className="cal">혼잡도 : {data}</p>
        </div>
      </div>
    </div>
  );
}
