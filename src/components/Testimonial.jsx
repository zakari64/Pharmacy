import React from "react";
import OwlCarousel from "react-owl-carousel";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";

function Testimonial() {
  const options = {
    items: 1,
    nav: true,
    dots: false,
    rewind: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
  };

  return (
    <section className="testimonial">
      <div className="overlay">
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <img src={bg1} alt="road" />
            </div>
            <div className="item">
              <img src={bg2} alt="sunrise" />
            </div>
            <div className="item">
              <img src={bg3} alt="road2" />
            </div>
            <div className="item">
              <img src={bg4} alt="road3" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
