import React from 'react'
import "../styles/home.css";

function About() {
  return (
    <div>
      <div className="about-holder">
        {/* about-section */}
        <div className="about">
          <i className="about-logo  bi bi-person-circle"></i>
          <p className='about-text'><p style={{fontWeight:"bold"}}>Handcrafted. Homemade. Indian. </p>
          CoffeeMania is a proud Indian brand bringing you small-batch, homemade coffee that’s rich in tradition and flavor. <br />
          We use ethically sourced beans, no preservatives, and 100% Indian love in every brew. <br />
          <p style={{textAlign:"right"}}>- coffeeMania</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
