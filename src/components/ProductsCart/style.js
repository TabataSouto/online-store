import styled from 'styled-components';

const MainSopphingCart = styled.main`
  & div {
    align-items: center;
    display: flex;
    height: 4.5em;
    gap: 10px;
    & img:nth-child(1) {
      width: 15px;
    }
    & img:nth-child(2) {
      width: 70px;
    }
    & div {
      border: 1px solid black;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      height: 20px;
      width: 20px;
      padding: 10px;
      & p {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;

export default {
  MainSopphingCart,
};
