import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  height: 48px;
  white-space: nowrap;

  background-color: #F44336;
  overflow: hidden;
  transition: height 0.3s ease-out;
  ${props => props.noHeight && css`height: 0;`}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  background: white;
  height: 100%;
  border-bottom: 1px solid rgba(0,0,0,.12);
  box-sizing: border-box;

  overflow: hidden;
  will-change: transform;
  ${props => (props.animated && css`transition: transform 0.3s ease-in-out;`)}
`;

const UNSWIPE_TIMEOUT_MS = 1000;

function SwipeToDismiss({
  id,
  children,
  dismissTimeoutMs = 1000,
  onSwipedOut = (() => {}),
  onDismiss = (() => {}),
}) {
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [hidden, setHidden] = useState(false);
  const containerElement = useRef(null);
  const contentElement = useRef(null);
  const willBeRemoved = useRef(false);

  const remove = () => {
    if (willBeRemoved.current) return;
    willBeRemoved.current = true;

    setTimeout(() => {
      setHidden(true);

      const dismissTimeoutId = setTimeout(() => {
        onDismiss(id); // TODO: This callback should remove this element from the DOM
      }, dismissTimeoutMs);

      const cancelDismissFn = () => {
        clearTimeout(dismissTimeoutId);
        setHidden(false);
      };
      onSwipedOut(cancelDismissFn);
    }, 300);
  };
  const setX = (xValue) => {
    const nextTranslation = Math.min(xValue, 0);
    setCurrentTranslation(nextTranslation);

    if (nextTranslation < -contentElement.current.clientWidth) {
      remove();
    }
  };

  return (
    <Container
      noHeight={hidden}
      onWheel={event => setX(currentTranslation - event.deltaX)}
      onMouseEnter={() => setAnimated(false)}
      onMouseLeave={() => {
        setAnimated(true);
        setTimeout(() => setX(0), UNSWIPE_TIMEOUT_MS);
      }}
      ref={containerElement}
    >
      <Content
        style={({ transform: `translateX(${currentTranslation}px)` })}
        currentTranslation={currentTranslation}
        animated={animated}
        ref={contentElement}
      >
        {children}
      </Content>
    </Container>
  );
}

export default SwipeToDismiss;
