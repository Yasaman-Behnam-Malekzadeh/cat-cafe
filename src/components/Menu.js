import bgMenu from "../images/bg-menu.jpeg";
import cake from "../images/cake.png";
import wafel from "../images/waffel.png";
import capochino from "../images/copochino.png";
import pancake from "../images/pancake.png";

function Menu() {
  return (
    <div
      className="menu d-flex justify-content-around align-items-center"
      style={{
        backgroundImage: `url(${bgMenu})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
          <img
            src={cake}
            className="col rounded-circle bg-light border border-5"
            height="200px"
            width="200px"
            alt="cake"
          />
          <img
            src={wafel}
            className="col rounded-circle bg-light border border-5"
            height="200px"
            width="200px"
            alt="wafel"
          />
        </div>
        <div className="row">
          <img
            src={capochino}
            className="col rounded-circle bg-light border border-5 mr-3"
            height="200px"
            width="200px"
            alt="capochino"
          />
          <img
            src={pancake}
            className="col rounded-circle bg-light border border-5"
            height="200px"
            width="200px"
            alt="pancake"
          />
        </div>
      </div>
      <div>
        <button // must change to link tag
          style={{ font: "italic small-caps bold 32px cursive" }}
          className="btn btn-lg btn-light border border-5"
        >
          Show Menu
        </button>
      </div>
    </div>
  );
}

export default Menu;
