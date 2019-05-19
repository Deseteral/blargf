import React, { Fragment } from 'react';
import styled from 'styled-components';

const Body = styled.body`
  margin: 64px 16px 16px 16px;
  background-color: #03A9F4;
  font-family: 'Roboto', sans-serif;
  user-select: none;
  box-sizing: border-box;
`;

function ApplicationWrapper({ title, children }) {
  if (typeof window !== 'undefined') return <Fragment>{children}</Fragment>;

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400|Crimson+Text:400i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <base target="_parent" />
      </head>
      <Body className="hidden">
        <div id="app">
          {children}
        </div>
        <script src="code.js" />
      </Body>
    </html>
  );
}

export default ApplicationWrapper;
