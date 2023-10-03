import React from 'react';
import logo from '../images/CATB-LogoNew.jpg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisionMission from '../components/VisionMission'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" m={5} p={5} alt="logo" />
        <p>
          Please see the link below for the flyer.
        </p>
        <a
          className="App-link"
          href="https://www.canva.com/design/DAFqaXI46Ag/oYUTdSW95NHWNqdBFe_uEQ/view?utm_content=DAFqaXI46Ag&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink "
          target="_blank"
          rel="noopener noreferrer"
        >
          Clean and Tidy Bros Flyer
        </a>
        <VisionMission/>
      </header>
    </div>
  );
}

export default Home;
