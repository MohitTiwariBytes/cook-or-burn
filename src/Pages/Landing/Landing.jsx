import React, { useEffect } from "react";
import "./Landing.css";
import gsap from "gsap";
import coke from "../../assets/cocacola.png";
import cupcake from "../../assets/cupcake.png";
import ice from "../../assets/iceCream.png";
import burger from "../../assets/burgerReal.png";
import fireEmoji from "../../assets/fireEmoji.png";

export default function Landing() {
  useEffect(() => {
    gsap.fromTo(
      "#img-1",
      {
        rotate: 0,
        top: "-200px",
        left: "-200px",
        opacity: 0,
      },
      {
        opacity: 1,
        rotate: 22.2,
        top: "-50px",
        left: "-50px",
        ease: "back(1.1, 0.6)",
        delay: 0.1,
      }
    );
    gsap.fromTo(
      "#img-2",
      {
        rotate: -100,
        top: "-250px",
        right: "-250px",
        opacity: 0,
      },
      {
        rotate: -133.17,
        top: "-120px",
        right: "-150px",
        ease: "back(1.1, 0.6)",
        opacity: 1,
        delay: 0.1,
      }
    );
    gsap.fromTo(
      "#img-3",
      {
        bottom: "-250px",
        left: "-250px",
        opacity: 0,
      },
      {
        bottom: "-120px",
        left: "-150px",
        ease: "back(1.1, 0.6)",
        opacity: 1,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      "#img-4",
      {
        rotate: -23.85,
        bottom: "-290px",
        right: "-200px",
        opacity: 0,
      },
      {
        rotate: -53.85,
        bottom: "-190px",
        right: "-100px",
        ease: "back(1.1, 0.6)",
        opacity: 1,
        delay: 0.4,
      }
    );

    gsap.fromTo(
      ".cntnt div",
      {
        y: "100px",
        opacity: 0,
      },
      {
        opacity: 1,
        y: "0px",
        duration: 0.3,
        ease: "back(1.1, 0.6)",
        stagger: 0.06,
      }
    );
  }, []);

  const redirect = (route) => {
    gsap.fromTo(
      ".cntnt div",
      {
        y: "0px",
        opacity: 1,
      },
      {
        opacity: 0,
        y: "-100px",
        duration: 0.1,
        ease: "back(1.1, 0.6)",
        stagger: 0.03,
        onComplete: () => {
          gsap.fromTo(
            "#img-1",
            {
              x: "0px",
            },
            {
              x: "-999px",
              ease: "back(1.1, 0.6)",
              duration: 1,
            }
          );
          gsap.fromTo(
            "#img-2",
            {
              x: "0px",
            },
            {
              x: "999px",
              ease: "back(1.1, 0.6)",
              duration: 1,
            }
          );
          gsap.fromTo(
            "#img-3",
            {
              x: "0px",
            },
            {
              x: "-999px",
              ease: "back(1.1, 0.6)",
              duration: 1,
            }
          );

          gsap.fromTo(
            "#img-4",
            {
              x: "0px",
            },
            {
              x: "999px",
              ease: "back(1.1, 0.6)",
              duration: 1,
              onComplete: () => {
                window.location.assign("/game");
              },
            }
          );
        },
      }
    );
  };

  return (
    <>
      <div className="notice">
        <h1>sorry your device is a bit too small for this 💔</h1>
      </div>
      <div className="main-landing-page">
        <div className="landingPage">
          <div className="images-overlay">
            <img id="img-1" src={burger} alt="" />
            <img id="img-2" src={ice} alt="" />
            <img id="img-3" src={cupcake} alt="" />
            <img id="img-4" src={coke} alt="" />
          </div>
          <div className="cntnt">
            <div className="txt-main">
              <div className="logo-txt">
                <h1>Cook or burn?</h1>
                <div className="btn-fire">
                  <button>
                    <img
                      src="https://em-content.zobj.net/source/apple/354/fire_1f525.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="sub-txt">
                <span>
                  Fun little game made by <strong>Mohit</strong> which is
                  completely useless like him
                </span>
              </div>
              <div className="btn-start">
                <button onClick={redirect} id="btn">
                  Start!
                </button>
              </div>
            </div>
            <div className="small-ntc">
              <span>
                So a lil info about the game : Enter your favorite food combo
                and then AI will give you a rating, and trust me it is not gonna
                feel like AI :3
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
