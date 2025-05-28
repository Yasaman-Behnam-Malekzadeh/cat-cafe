import React, { useState, useEffect } from "react";

import firstCat from "../images/1.jpg";
import secondCat from "../images/2.jpg";
import thirdCat from "../images/3.jpg";
import forthCat from "../images/4.jpg";
import fifthCat from "../images/5.jpg";
import sixthCat from "../images/6.jpg";

import cloud from "../images/cloud.jpeg";
import bgMenu from "../images/bg-menu.jpeg";

// List of fun facts
const funFacts = [
  "Cats sleep 70% of their lives!",
  "A group of cats is called a clowder.",
  "Cats have five toes on their front paws, but only four on the back.",
  "A cat can jump up to six times its length!",
  "Each cat's nose print is unique, like a fingerprint.",
  "Cats can rotate their ears 180 degrees.",
];

const catImages = [firstCat, secondCat, thirdCat, forthCat, fifthCat, sixthCat];

function FunFacts() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % catImages.length);
    }, 10000); // change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fun-facts d-flex flex-column justify-content-between"
      style={{
        backgroundImage: `url(${bgMenu})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        height: "90vh",
        textAlign: "center",
        position: "relative",
        padding: "2rem",
      }}
    >
      {/* Title at the top */}
      <h1
        className="m-4"
        style={{ font: "italic small-caps bold 82px cursive" }}
      >
        Fun Facts About Cats
      </h1>

      <div className="d-flex justify-content-around align-items-end">
        <div>
          {" "}
          {/* Cloud with fact in the center */}
          <div
            style={{
              backgroundImage: `url(${cloud})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "500px",
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              font: "italic small-caps bold 24px cursive",
            
            }}
          >
            {funFacts[index]}
          </div>
          {/* Cat image at the bottom */}
          <div style={{ marginBottom: "-20px", alignSelf: "center" }}>
            <img src={catImages[index]} alt={`Cat ${index + 1}`} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default FunFacts;
