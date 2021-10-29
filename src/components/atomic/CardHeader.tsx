import styled from 'styled-components';

interface CardHeaderProps {
  subheader?: boolean,
  children: string,
}

const CardHeader = styled.div<CardHeaderProps>`
  margin: 0 0 8px 0;
  font-weight: 500;
  letter-spacing: 0.25px;
  font-size: ${(props): string => (props.subheader ? '18px' : '22px')};
`;

export default CardHeader;
