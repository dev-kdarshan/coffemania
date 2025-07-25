import React, { useState } from "react";
import "../styles/contacts.css";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    e.target.reset();
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>"Great coffee begins with great connections."</h1>
      </div>

      <div>
      <div className="contact-content">
        <div className="contact-info">
          <p className="quotecontact">There is nothing we love more than hearing back from you. We would be happy to help.  <br />Call us at: +918484932148 or whatsapp us on: +91 8910142086. <br /> You can also Email at: support@countrybean.in</p>
         <hr />
          <p className="address"> Registered Office:<br /> CoffeMania Pvt. Ltd. 12A, Victoria Trade Center, MG Road, Fort, Mumbai – 400001, Maharashtra, India</p>

          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

        <div className="formsection">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="cupcoffee">
            <img src="src\assets\cup of coffee.PNG" alt="cup of coffee" />
          </div>
        </div>

      </div>

      {showToast && (
        <div className="toast-message">
          <i className="fas fa-mug-hot"></i> Your message has been sent!
        </div>
      )}
    </div>
  );
};

export default Contact;
