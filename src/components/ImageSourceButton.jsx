import React from 'react';
import Icon from './Icon';

function ImageSourceButton({ imageData }) {
  return (
    <a className="tray-icon" href={imageData.link}>
      <Icon type="photo_camera" />
    </a>
  );
}

export default ImageSourceButton;
