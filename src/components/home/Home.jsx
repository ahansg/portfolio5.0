import React from "react";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Portfolio from "../portfolio/Portfolio";
import Rectangle from "../../assets/Rectangle.png";

const Home = () => {
  return (
    <>
      <div className="container home_margin_top">
        <h1 className="home_font home_center">
          Anna <br></br>Hansgård
        </h1>

        <h3 className="home_font_small home_center">
          UX-DESIGNER,<br></br> KUNSTNER, SYKEPLEIER{" "}
        </h3>
        <div className="home_center small_padding home_padding_bottom">
          <img src={Rectangle} alt="Dissimilis First" className="home_center" />
        </div>

        <Portfolio />
      </div>
    </>
  );
};

export default Home;
