import styled from 'react-emotion';

const CardHeader = styled.div`
  margin: 0 0 8px 0;
  font-weight: 500;
  letter-spacing: 0.25px;
  font-size: ${props => (props.subheader ? '18px' : '22px')};
`;

export default CardHeader;
