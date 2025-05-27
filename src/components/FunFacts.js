import bgMenu from "../images/bg-menu.jpeg";

function FunFacts() {
  return (
    <div
      className="fun-facts"
      style={{
        backgroundImage: `url(${bgMenu})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        height: "100vh",
      }}
    >
      test testtest
    </div>
  );
}

export default FunFacts;
