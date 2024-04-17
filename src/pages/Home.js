import React from "react";
import logo from "../images/Umfazi C&T.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VisionMission from "../components/VisionMission";
import Template from "../components/Template";
import Flyer from "../images/NewFlyer.jpeg";

const Home = () => {
  return (
    <Template>
      <div className="App mt-5">
        <header className="App-header mt-5">
          <img src={logo} className="App-logo mt-5" alt="logo" />
          <p>Please see the link below for the flyer.</p>
          <a
            className="App-link"
            href={Flyer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Umfazi Clean and Tidy Flyer
          </a>
          <VisionMission />
        </header>
      </div>
    </Template>
  );
};

export default Home;
