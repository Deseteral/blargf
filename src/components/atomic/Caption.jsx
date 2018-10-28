import styled from 'react-emotion';

const Caption = styled.div`
  font-family: 'Crimson Text', serif;
  opacity: 0.56;
  font-size: ${props => ((props.small || props.error) ? '16px' : '19px')};
  font-style: italic;
  color: ${props => (props.error ? '#B71C1C' : '#000000')}
`;

export default Caption;
