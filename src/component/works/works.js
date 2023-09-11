import React from "react";
import "./works.css";

export default function Works() {
  return (
    <div className="works">
      <div className="how">
        <p id="word">How it works</p>
        <div id="line"></div>
      </div>
      <div>
        <div className="works_box">
          <div className="sub_box">
            <p id="title">YOLOv5를 이용한 탐지</p>
            <div id="title_line"></div>
            <p className="works_text">
              AI 객체 탐지 도구인 YOLOv5를 이용하여
              <br />
              사람 인원수를 카운팅 합니다.
              <br />
              승하차 인원수를 계산하여 전체 인원수를
              <br />
              구하고 있습니다.
            </p>
          </div>
          <div id="temp"></div>
          {/* <img></img> */}
        </div>
        <div className="works_box">
          <img></img>
          <div id="temp"></div>
          <div className="sub_box_2">
            <p id="title">기온과 습도를 이용한 계산</p>
            <div id="title_line"></div>
            <p className="works_text">
              기상청에서 받아온 API를 기반으로 혼잡도
              <br />
              백분율을 조정합니다. 혼잡도는 주관적인 기준이
              <br />
              영향을 미치기 때문에 날씨가 덥고 습할수록
              <br />
              적은 인원이 타도 혼잡도를 높게 표현합니다.
            </p>
          </div>
        </div>
        <div className="works_box">
          <div className="sub_box">
            <p id="title">실시간 영상 분석</p>
            <div id="title_line"></div>
            <p className="works_text">
              현재 운행중인 버스의 승.하차 영상을 전송받아
              <br />
              인원수를 계산합니다. 영상을 실시간으로 분석하고
              <br />
              웹사이트에 나타내기에 현재 버스의 탑승 인원
              <br />
              현황을 파악할 수 있습니다.
            </p>
          </div>
          <img></img>
          <div id="temp"></div>
        </div>
      </div>
    </div>
  );
}
