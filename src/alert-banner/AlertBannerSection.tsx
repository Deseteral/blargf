import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { AlertBannerContent } from './model';

const Banner = styled(Card)`
  background-color: red;
`;

export interface AlertBannerSectionProps {
  alertBanner: AlertBannerContent,
}

function AlertBannerSection({ alertBanner }: AlertBannerSectionProps): (JSX.Element | null) {
  if (!alertBanner) return null;

  return (
    <Banner>
      {alertBanner}
    </Banner>
  );
}

export default AlertBannerSection;
