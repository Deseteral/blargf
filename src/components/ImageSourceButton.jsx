import React from 'react';

function ImageSourceButton({ imageData }) {
  return (
    <a className="tray-icon" href={imageData.link}>
      <i className="material-icons">photo_camera</i>
    </a>
  );
}

export default ImageSourceButton;
