import bgMenu from "../images/bg-menu.jpeg";

function Contact() {
  return (
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
      test
    </div>
  );
}

export default Contact;
