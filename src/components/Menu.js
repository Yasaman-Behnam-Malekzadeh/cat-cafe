import React from "react";
import bgMenu from "../images/bg-menu.jpeg";
import cake from "../images/cake.png";
import wafel from "../images/waffel.png";
import capochino from "../images/copochino.png";
import pancake from "../images/pancake.png";
import bgWidth from "../images/bg-width-opp.jpeg";

function Menu() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgWidth})`,
          height: "40px",
          width: "100%",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        className="menu d-flex justify-content-around align-items-center"
        style={{
          backgroundImage: `url(${bgMenu})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
          height: "100vh",
        }}
      >
        <div>
          <button
            style={{ font: "italic small-caps bold 32px cursive" }}
            className="btn btn-lg btn-light border border-5" 
          >
            Show Menu
          </button>
        </div>
        <div>
          <h1
            className="mb-5"
            style={{ font: "italic small-caps bold 82px cursive" }}
          >
            Menu:
          </h1>

          <div className="row mb-4">
            <div className="d-flex flex-column align-items-center col">
              <img
                src={cake}
                className="col bg-light"
                height="200px"
                width="200px"
                alt="cake"
                style={{ cursor: "pointer" }}
              />
              <span style={{ font: "italic small-caps bold 20px cursive" }}>
                Types of cakes
              </span>
            </div>
            <div className="d-flex flex-column align-items-center col">
              <img
                src={wafel}
                className="col bg-light"
                height="200px"
                width="200px"
                alt="wafel"
                style={{ cursor: "pointer" }}
              />
              <span style={{ font: "italic small-caps bold 20px cursive" }}>
                Waffel with topping
              </span>
            </div>
          </div>

          <div className="row mb-4">
            <div className="d-flex flex-column align-items-center col">
              <img
                src={capochino}
                className="col bg-light"
                height="200px"
                width="200px"
                alt="capochino"
                style={{ cursor: "pointer" }}
              />
              <span style={{ font: "italic small-caps bold 20px cursive" }}>
                Types of Coffee
              </span>
            </div>
            <div className="d-flex flex-column align-items-center col">
              <img
                src={pancake}
                className="col bg-light"
                height="200px"
                width="200px"
                alt="pancake"
                style={{ cursor: "pointer" }}
              />
              <span style={{ font: "italic small-caps bold 20px cursive" }}>
                Pancake with topping
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
