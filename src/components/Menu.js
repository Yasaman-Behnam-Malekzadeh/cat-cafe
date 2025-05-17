import bgMenu from "../images/bg-menu.jpeg";

function Menu() {
  return (
    <div
      className="menu"
      style={{
        backgroundImage: `url(${bgMenu})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      
    </div>
  );
}

export default Menu;
