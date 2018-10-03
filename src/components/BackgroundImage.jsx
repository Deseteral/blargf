import React, { Fragment } from 'react';

function BackgroundImage({ imageData }) {
  const rehydrationScript = `window.backgroundImage=${JSON.stringify(imageData)}`;

  return (
    <Fragment>
      <div className="background-image" />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={({ __html: rehydrationScript })} />
    </Fragment>
  );
}

export default BackgroundImage;
