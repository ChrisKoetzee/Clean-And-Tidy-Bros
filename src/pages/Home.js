import React from "react";
import logo from "../images/CATB-LogoNew.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VisionMission from "../components/VisionMission";
import Template from "../components/Template";

const Home = () => {
  return (
    <Template>
      <div className="App mt-5">
        <header className="App-header mt-5">
          <img src={logo} className="App-logo mt-5" alt="logo" />
          <p>Please see the link below for the flyer.</p>
          <a
            className="App-link"
            href="https://www.canva.com/design/DAFqaXI46Ag/oYUTdSW95NHWNqdBFe_uEQ/view?utm_content=DAFqaXI46Ag&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink "
            target="_blank"
            rel="noopener noreferrer"
          >
            Clean and Tidy Bros Flyer
          </a>
          <VisionMission />
        </header>
      </div>
    </Template>
  );
};

export default Home;
