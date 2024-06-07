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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
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
    
    <Router>
    <Routes>
      <Route path="/signup" element={<SignIn />} />
      <Route path="/" element={<CustomNavbar />} />
    </Routes>
  </Router>
  );
};

export default App;
