import contactImg from "../images/contact.png";
function Contact() {
  return (
    <div
      className="contact d-flex justify-content-around align-items-center"
      style={{ height: "90vh", textAlign: "center"}}
    >
      <div>
        <img
          src={contactImg}
          alt="Contact"
          style={{ width: "250px", height: "auto" }}
        />
        
      </div>
      <div>
        <h1
          className="text-center mt-4 h1"
          style={{ font: "italic small-caps bold 82px cursive" }}
        >
          Contact
        </h1>
        {/* <p
          className="text-center"
          style={{ font: "italic small-caps bold 24px cursive" }}
        >
          We would love to hear from you! Please reach out with any questions or
          feedback.
        </p> */}
        <input type="text" placeholder="Your Name" className="form-control mb-3" />
        <input type="email" placeholder="Your Email" className="form-control mb-3" />
        <textarea
          placeholder="Your Message"
          className="form-control mb-3"
          rows="5"
        ></textarea>
        <button className="btn btn-primary btn-lg btn-light border">Send Message</button>
        
      </div>
    </div>
  );
}

export default Contact;
