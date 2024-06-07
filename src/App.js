import React, { useRef } from 'react';
import Slider from "react-slick";
import CustomNavbar from './components/CustomNavbar';
import image1 from './assert/download.jpg';
import image2 from './assert/download.jpg';
import image3 from './assert/download.jpg';
import image4 from './assert/download.jpg';
import image5 from './assert/download.jpg';
import image6 from './assert/download.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"; // Import your custom CSS file

const App = () => {
  let sliderRef = useRef(null);

  const play = () => {
    sliderRef.slickPlay();
  };

  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'slider' // Add this to apply custom styling
  };

  return (
    <div className="App">
      <CustomNavbar />
      <div className="slider-container">
        <h2>Auto Play {"&"} Pause with buttons</h2>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          <div className="card">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="card">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="card">
            <img src={image3} alt="Image 3" />
          </div>
          <div className="card">
            <img src={image4} alt="Image 4" />
          </div>
          <div className="card">
            <img src={image5} alt="Image 5" />
          </div>
          <div className="card">
            <img src={image6} alt="Image 6" />
          </div>
        </Slider>
        <div className="buttons-container" style={{ textAlign: "center" }}>
          <button className="button" onClick={play}>
            Play
          </button>
          <button className="button" onClick={pause}>
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
