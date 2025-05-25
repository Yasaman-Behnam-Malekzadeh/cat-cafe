import React, { useEffect, useRef } from "react";
import bgMenu from "../images/bg-menu.jpeg";
import cake from "../images/cake.png";
import wafel from "../images/waffel.png";
import capochino from "../images/copochino.png";
import pancake from "../images/pancake.png";

function Menu() {
  const imageRefs = useRef([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const direction = isScrollingDown ? 1 : -1;

      imageRefs.current.forEach((img) => {
        if (img) {
          img.style.transition = "transform 3s ease-in-out";
          img.style.transform = `rotate(${direction * 360}deg)`;

          setTimeout(() => {
            img.style.transform = "rotate(0deg)";
          }, 3000);
        }
      });

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  return (
    <div
      className="menu d-flex justify-content-around align-items-center"
      style={{
        backgroundImage: `url(${bgMenu})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        height: "100vh",
      }}
    >
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
              ref={(el) => setRef(el, 0)}
              className="col rounded-circle bg-light"
              height="200px"
              width="200px"
              alt="cake"
              style={{ cursor: "pointer" }}
            />
            <span style={{ font: "italic small-caps bold 20px cursive" }}>Types of cakes</span>
          </div>
          <div  className="d-flex flex-column align-items-center col">
            <img
              src={wafel}
              ref={(el) => setRef(el, 1)}
              className="col rounded-circle bg-light"
              height="200px"
              width="200px"
              alt="wafel"
              style={{ cursor: "pointer" }}
            />
            <span style={{ font: "italic small-caps bold 20px cursive" }}>Waffel with topping</span>
          </div>
        </div>
        <div className="row mb-4">
          <div  className="d-flex flex-column align-items-center col">
            <img
              src={capochino}
              ref={(el) => setRef(el, 2)}
              className="col rounded-circle bg-light"
              height="200px"
              width="200px"
              alt="capochino"
              style={{ cursor: "pointer" }}
            />
            <span style={{ font: "italic small-caps bold 20px cursive" }}>Types of Coffee</span>
          </div>
          <div  className="d-flex flex-column align-items-center col">
            <img
              src={pancake}
              ref={(el) => setRef(el, 3)}
              className="col rounded-circle bg-light"
              height="200px"
              width="200px"
              alt="pancake"
              style={{ cursor: "pointer" }}
            />
            <span style={{ font: "italic small-caps bold 20px cursive" }}>Pancake with topping</span>
          </div>
        </div>
      </div>
      <div>
        <a
          href="#"
          style={{ font: "italic small-caps bold 32px cursive" }}
          className="btn btn-lg btn-light border border-5"
        >
          Show Menu
        </a>
      </div>
    </div>
  );
}

export default Menu;
