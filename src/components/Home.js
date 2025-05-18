import fisrtCat from "../images/1.jpg";
import secondCat from "../images/2.jpg";
import thirdCat from "../images/3.jpg";
import forthCat from "../images/4.jpg";
import fifthCat from "../images/5.jpg";
import sixthCat from "../images/6.jpg";

import bgWidth from "../images/bg-width.jpeg";

function Home() {
  return (
    <div className="home" style={{ height: "100vh" }}>
      <h1
        className="d-flex justify-content-center align-items-end "
        style={{font: "italic small-caps bold 102px cursive", height: "15%" }}
      >
        Cat Cafe
      </h1>
      <div
        className="home d-flex justify-content-center align-items-end "
        style={{ height: "70%" }}
      >
        <img src={fisrtCat} alt="first cat" />
        <img src={secondCat} alt="secondCat" />
        <img src={thirdCat} alt="thirdCat" />
        <img src={forthCat} alt="forthCat" />
        <img src={fifthCat} alt="fifthCat" />
        <img src={sixthCat} alt="sixthCat" />
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
