import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import { WaveFooter } from "./svgs/bg";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="blank"></div>
      <div className="footer">
        <WaveFooter />
      </div>
    </div>
  );
}

export default App;
