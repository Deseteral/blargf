import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const TrayLink = styled.a`
  opacity: 0.56;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.87;
  }
`;

interface TrayIconLinkProps {
  icon: string,
  href: string,
}

function TrayIconLink({ icon, href }: TrayIconLinkProps): JSX.Element {
  return (
    <TrayLink href={href}>
      <Icon type={icon} />
    </TrayLink>
  );
}

export default TrayIconLink;
