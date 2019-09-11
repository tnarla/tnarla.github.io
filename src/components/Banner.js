import React, { Component } from "react";
import "./style/Banner.css";
import { WaveBG } from "../svgs/bg";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="navbar-container">
          <div className="navbar-left">!false</div>
          <div className="navbar-right">work</div>
        </div>
        <div className="intro-content">
          <div className="title">
            Hello!{" "}
            <span className="emoji-wave" role="img" aria-label="wave">
              👋🏼
            </span>
          </div>
          My name is Tru. I'm a developer / designer based in SF. <br />
          Currently @ r2c and previously @ Double Fine Productions & Uber.
        </div>
        <div className="banner-bg">
          <WaveBG />
        </div>
      </div>
    );
  }
}
