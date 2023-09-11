// import React, { useEffect, useState } from "react";
// import videojs from "video.js";
// import "./busVideo.css";

// export default function BusVideo() {
//   const [data, setData] = useState();
//   var player = videojs("my_video");

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/get_weather", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => setData(result))
//       .catch((err) => console.error("Error:", err));
//   }, []);

//   useEffect(() => {
//     player.play();
//   }, []);

//   return (
//     <div className="video">
//       <div className="explanation">
//         <p id="ex_video">Video</p>
//         <p id="kor_ex_video">버스 내 혼잡도</p>
//       </div>
//       <div className="video_box">
//         <video id="my_video" className="video-js" muted="muted" controls>
//           <source
//             src="/static/video/hls/index.m3u8"
//             type="application/x-mpegURL"
//           />
//         </video>
//         <script>player.play();</script>
//         {/* <div className="type">
//           <p id="green">여유</p>
//           <p id="blue">보통</p>
//           <p id="yellow">혼잡</p>
//           <p id="red">매우 혼잡</p>
//         </div> */}
//         <div className="type">
//           <p className="cal">인원수 : {data}</p>
//           <p className="cal">기온 : {data}</p>
//           <p className="cal">혼잡도 : {data}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;
