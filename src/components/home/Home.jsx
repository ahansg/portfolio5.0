import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Portfolio from "../portfolio/Portfolio";
import PlaneAnimation from "../home/PlaneAnimation";

const Home = () => {
  return (
    <>
      <div className="container margin_top">
        <h1 className="portfolio_title">Hei, jeg er Anna!</h1>
        <h3 className="home__subtitle">UX-designer, kunstner og sykepleier </h3>

        <p className="body_text">
          Som en nysgjerrig, kreativ og kritisk tenker elsker jeg å utforske
          verden rundt meg, forstå hvordan ting fungerer og brainstorme måter å
          forbedre opplevelser gjennom innovasjon og kreativ problemløsning. Med
          en variert bakgrunn tar jeg med meg unike ferdigheter og perspektiv
          inn i arbeidet mitt. Ta gjerne en titt på noen av prosjektene mine
          nedenfor, og ta kontakt hvis du har spørsmål eller ønsker å
          samarbeide!
        </p>

        <ScrollDown />

        <Portfolio />
      </div>
    </>
  );
};

export default Home;
