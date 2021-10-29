import React from 'react';
import styled from 'styled-components';
import { BackgroundImageData } from './model';

const BackgroundImageCanvas = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  transition: opacity 0.5s ease;
  opacity: 0;
  transform: translateZ(0);

  &.show {
    opacity: 1;
  }
`;

export interface BackgroundImageProps {
  imageData: BackgroundImageData,
}

function BackgroundImage({ imageData }: BackgroundImageProps): JSX.Element {
  const rehydrationScript = `window.backgroundImage=${JSON.stringify(imageData)}`;

  return (
    <>
      <BackgroundImageCanvas id="background-image" />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={({ __html: rehydrationScript })} />
    </>
  );
}

declare global {
  interface Window {
    backgroundImage: BackgroundImageData;
  }
}

export default BackgroundImage;
