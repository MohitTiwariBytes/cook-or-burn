import React from "react";
import "./Game.css";
import gsap from "gsap";
import rageBait from "../../assets/ragebaitGif.gif";

export default function Game() {
  return (
    <>
      <div className="notice2">
        <h1>sorry your device is a bit too small for this 💔</h1>
      </div>
      <div className="main-game-page">
        <div className="gamePage">
          <div className="top-nav">
            <h1>Cook or burn? </h1>
          </div>
          <div className="gifs-overlay">
            <img id="gif-1" src={rageBait} alt="" />
            <img id="gif-2" src={rageBait} alt="" />
            <img id="gif-3" src={rageBait} alt="" />
          </div>
          <div className="game-main">
            <div className="txt-title">
              <span>Enter your favorite food combo!</span>
            </div>
            <div className="inputs">
              <input id="first-food" type="text" />
              <span>+</span>
              <input id="second-food" type="text" />
            </div>
            <div className="submit-button">
              <button style={{ width: "427px" }} id="btn">
                Roast me please!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
