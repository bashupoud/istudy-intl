import React from "react";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import background from "../../assets/Background-map.svg";

const ComingSoon = () => {
  return (
    <div>
      <img src={background} className="background-map" alt="study abroad" />
      <section class="coming_soon-section">
        <div class="container">
          <div class="coming-soon">
            <h2>
              Discover your path to a brighter future. Our educational
              consultancy iStudy international is there for you and
              <span> Our website is coming soon! </span> Stay tuned for
              personalized guidance from experienced professional, tailored to
              your academic and career goals. From university to visa
              application, we'll be with you in every step of the way.
            </h2>
          </div>
          <div class="contacts">
            <div class="contact">
              <span class="label">
                Email <MdOutlineMail />
              </span>
              <a href="#">
                shaileshistudy2010@gmail.com | istudyintl2010@gmail.com
              </a>
            </div>
            <div class="contact">
              <span class="label">
                Phone <MdOutlinePhone />
              </span>
              <a href="#">01-5918853 | +977-9801848237</a>
            </div>
            <div class="contact">
              <span class="label">
                Location <MdOutlineLocationOn />
              </span>
              <a href="#">Bagbazar, Kathmandu, Opposite of Everest Bank</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
