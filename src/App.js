import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/footer";

import MainImage from "./component/main_image/main_image";
import TaskInfo from "./component/taskInfo/taskInfo";
import BusVideo from "./component/busVideo/busVideo";
import Chart from "./component/chart/chart";
import Works from "./component/works/works";

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/static/video/hls/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <>
      <Header />
      <MainImage />
      <TaskInfo />
      <BusVideo options={videoJsOptions} />
      <Chart />
      <Works />
      <Footer />
    </>
  );
}

export default App;
