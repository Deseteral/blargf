import styled from 'react-emotion';
import { css } from 'emotion';
import Column from '../Column';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 16px;
  margin-top: 16px;
  border-radius: 2px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  transition: all 0.5s ease;
  opacity: 1;
  ${props => (props.height ? css`height: ${props.height};` : '')}

  &:first-of-type {
    margin-top: 0;
  }

  .hidden & {
    opacity: 0;
  }

  .hidden ${Column}:first-of-type & {
    transform: translateY(100px);
  }

  .hidden ${Column}:last-of-type & {
    transform: translateY(180px);
  }
`;

export default Card;
