import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import '../Decorate/switcher.css';

const ImageSwitcher = () => {
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [bottomImageIndex, setBottomImageIndex] = useState(0);

  const topImages = ['../source/top-image/image1.jpg', '../source/top-image/image2.jpg', '../source/top-image/image3.jpg'];
  const bottomImages = ['../source/bottom-image/image1.jpg', '../source/bottom-image/image2.jpg', '../source/bottom-image/image3.jpg'];

  const handleTopLeftClick = () => {
    if (topImageIndex === 0) {
      setTopImageIndex(topImages.length - 1);
    } else {
      setTopImageIndex(topImageIndex - 1);
    }
  };

  const handleTopRightClick = () => {
    if (topImageIndex === topImages.length - 1) {
      setTopImageIndex(0);
    } else {
      setTopImageIndex(topImageIndex + 1);
    }
  };

  const handleBottomLeftClick = () => {
    if (bottomImageIndex === 0) {
      setBottomImageIndex(bottomImages.length - 1);
    } else {
      setBottomImageIndex(bottomImageIndex - 1);
    }
  };

  const handleBottomRightClick = () => {
    if (bottomImageIndex === bottomImages.length - 1) {
      setBottomImageIndex(0);
    } else {
      setBottomImageIndex(bottomImageIndex + 1);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="image-switcher">
      <div className="image-switcher-column">
        <button className="image-switcher-button" onClick={handleTopLeftClick}>{'<'}</button>
        <img className="image-switcher-image" src={topImages[topImageIndex]} alt="" />
        <button className="image-switcher-button" onClick={handleTopRightClick}>{'>'}</button>
      </div>
      <div className="image-switcher-column">
        <button className="image-switcher-button" onClick={handleBottomLeftClick}>{'<'}</button>
        <img className="image-switcher-image" src={bottomImages[bottomImageIndex]} alt="" />
        <button className="image-switcher-button" onClick={handleBottomRightClick}>{'>'}</button>
      </div>
    </div>
    </div>
  );
};

export default ImageSwitcher;
