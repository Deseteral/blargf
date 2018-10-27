import React from 'react';
import Icon from './atomic/Icon';

function ImageSourceButton({ imageData }) {
  return (
    <a className="tray-icon" href={imageData.link}>
      <Icon type="photo_camera" />
    </a>
  );
}

export default ImageSourceButton;
