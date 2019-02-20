import styled from 'styled-components';

const Tray = styled.div`
  display: flex;
  position: fixed;
  right: 8px;
  bottom: 8px;
  margin-bottom: -4px;

  & > * {
    margin-left: 8px;
    color: white;
  }
`;

export default Tray;
