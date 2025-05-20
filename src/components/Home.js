import fisrtCat from "../images/1.jpg";
import secondCat from "../images/2.jpg";
import thirdCat from "../images/3.jpg";
import forthCat from "../images/4.jpg";
import fifthCat from "../images/5.jpg";
import sixthCat from "../images/6.jpg";

import bgWidth from "../images/bg-width.jpeg";
import cloud from "../images/cloud.jpeg";

import React, { useState, useEffect } from "react";

function Home() {
  const [showMewo, setShowMewo] = useState(false);

  function handleClickMewo() {
    setShowMewo(true);

    setTimeout(() => {
      setShowMewo(false);
    }, 3000);
  }

  return (
    <div className="home" style={{ height: "100vh" }}>
      <h1
        className="d-flex justify-content-center align-items-end "
        style={{ font: "italic small-caps bold 102px cursive", height: "15%" }}
      >
        Cat Cafe
      </h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "40%",
        }}
      >
        {showMewo ? (
          <div  style={{ font: "italic small-caps bold 32px cursive" }}
           className="d-flex justify-content-center align-items-center ">
            <img
              src={cloud}
              alt="cloud"
              className="position-absolute "
              style={{ zIndex: "-1" }}
            />
            ...Mewooooo
          </div>
        ) : null}
      </div>

      <div
        className=" d-flex justify-content-center align-items-end "
        style={{ height: "40%" }}
      >
        <img src={fisrtCat} alt="first cat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
        <img src={secondCat} alt="secondCat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
        <img src={thirdCat} alt="thirdCat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
        <img src={forthCat} alt="forthCat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
        <img src={fifthCat} alt="fifthCat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
        <img src={sixthCat} alt="sixthCat" onClick={handleClickMewo} style={{ cursor: "pointer" }}/>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgWidth})`,
          height: "30px",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></div>
    </div>
  );
}

export default Home;
