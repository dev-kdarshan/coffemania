import React, { useState } from 'react'
import "../styles/home.css";

const featuresData = [
    {
      title: 'Quality Assured',
      subtitle: 'Every batch is handcrafted and quality checked before shipping.',
    },
    {
      title: 'Free Fast Shipping',
      subtitle: 'Get your coffee delivered quickly at no extra cost across India.',
    },
    {
      title: 'Happy Customers',
      subtitle: 'Thousands of coffee lovers trust us and keep coming back.',
    },
  ];
  
function Dropdown() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="dropdowns-holder">
            <div className="features-container">
            <i className="bi bi-star"></i>
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="feature-box"
                onClick={() => toggleDropdown(index)}
              >
                <h5>{feature.title}</h5>
                {activeIndex === index && <p className="feature-subtitle">{feature.subtitle}</p>}
              </div>
              
            ))}
          </div>
        </div>
    </div>
  )
}

export default Dropdown
