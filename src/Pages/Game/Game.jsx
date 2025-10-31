import React, { useEffect, useState } from "react";
import "./Game.css";
import gsap from "gsap";
import rageBait from "../../assets/ragebaitGif.gif";

export default function Game() {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const MODEL = "gemini-2.0-flash";
  const systemPrompt =
    "You are a 14 year old random boy who is just brainrotted, your answers must use slangs and your language should be like they use in hoods, suppose if you dont like but make sure you dont over do it, no buzzwords no yapping straight answers use Sybau, heart broken emoji rose down emoji and talk in slangs, and suppose if the food 1 and food 2 given to you is not a food just simply say thats not a food dawg or anything like that but also make sure your responses does not hurt anyone and are under 15 words max";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiAnswer, setAiAnswer] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);

  const openResults = async () => {
    const first = document.getElementById("first-food").value.trim();
    const second = document.getElementById("second-food").value.trim();
    if (!first || !second) return alert("Enter both foods!");

    setLoading(true);

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nIs ${first} and ${second} a good combo based on your opinion? please also give an honest score out of 10.`,
              },
            ],
          },
        ],
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseErr) {
        console.error("Failed to parse JSON:", parseErr);
        throw new Error("Invalid JSON response");
      }

      if (!response.ok) {
        const msg = data?.error?.message || `status ${response.status}`;
        throw new Error(msg);
      }

      let text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.parts?.[0]?.text ||
        JSON.stringify(data);

      const scoreMatch = text.match(/(\d{1,2})\s*\/\s*10/);
      const finalScore = scoreMatch ? `${scoreMatch[1]}/10` : "N/A";

      setAiAnswer(text);
      setScore(finalScore);

      setIsModalOpen(true);
    } catch (err) {
      console.error("Full error details:", err);
      setAiAnswer("Something went wrong 😭");
      setScore("N/A");
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeResults = () => {
    gsap.to(".results-div", {
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        setIsModalOpen(false);
        setAiAnswer("");
        setScore("");
        setLoading(false);
        document.getElementById("first-food").value = "";
        document.getElementById("second-food").value = "";
      },
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        ".results-div-parent",
        { opacity: 0, display: "flex" },
        { opacity: 1, duration: 0.2, display: "flex" }
      );
      gsap.fromTo(
        ".results-div",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2 }
      );
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="notice2">
        <h1>sorry your device is a bit too small for this 💔</h1>
      </div>

      <div className="main-game-page">
        <div className="gamePage">
          <div className="top-nav">
            <h1>Cook or burn?</h1>
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
              <button onClick={openResults} style={{ width: "427px" }} id="btn">
                {loading ? "Cooking..." : "Roast me please!"}
              </button>
            </div>

            {isModalOpen && (
              <div className="results-div-parent">
                <div className="results-div">
                  <div onClick={closeResults} className="close-btn">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6815 14.5605C16.0965 13.974 15.1455 13.974 14.5605 14.5605C13.974 15.1455 13.974 16.0965 14.5605 16.6815L21.9855 24.1065L14.5605 31.5315C13.974 32.1165 13.974 33.066 14.5605 33.6525C15.1455 34.2375 16.0965 34.2375 16.6815 33.6525L24.1065 26.2275L31.5315 33.6525C32.1165 34.2375 33.066 34.2375 33.6525 33.6525C34.2375 33.066 34.2375 32.1165 33.6525 31.5315L26.2275 24.1065L33.6525 16.6815C34.2375 16.0965 34.2375 15.1455 33.6525 14.5605C33.066 13.974 32.1165 13.974 31.5315 14.5605L24.1065 21.9855L16.6815 14.5605Z"
                        fill="#765B00"
                      />
                    </svg>
                  </div>

                  <div className="score-title">
                    <h1>AI Score: {score}</h1>
                  </div>

                  <div className="random-sena">
                    <div className="random">
                      <span>Chatora (Ai) says:</span>
                    </div>
                    <div className="aiAnswer">
                      <span>{aiAnswer}</span>
                    </div>
                  </div>

                  <div className="notice-result">
                    <span>
                      Note: please don't take anything the AI says seriously,
                      this is completely satire and if it makes you
                      uncomfortable — I apologize.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
