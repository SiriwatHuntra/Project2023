import React, { useState } from 'react';

function ImageSwitcher() {
  // Define an array of image sources
  const imageSources = [
    'top-source.jpg',
    'bottom-source.jpg',
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  // Set up state to keep track of which image is currently displayed
  const [currentImage, setCurrentImage] = useState(0);

  // Event handler function to switch to the previous image
  const previousImage = () => {
    const newIndex = currentImage === 0 ? imageSources.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  // Event handler function to switch to the next image
  const nextImage = () => {
    const newIndex = currentImage === imageSources.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={imageSources[currentImage]} alt="Top image" className="img-fluid" />
          <button onClick={previousImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
        <div className="col">
          <img src={imageSources[currentImage + 1]} alt="Bottom image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ImageSwitcher;
