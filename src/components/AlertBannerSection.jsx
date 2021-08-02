import React from 'react';
import styled from 'styled-components';
import Card from './atomic/Card';

const Banner = styled(Card)`
  background-color: red;
`;

function AlertBannerSection({ alertBanner }) {
  if (!alertBanner.data) return null;

  return (
    <Banner>
      {alertBanner.data}
    </Banner>
  );
}

export default AlertBannerSection;
