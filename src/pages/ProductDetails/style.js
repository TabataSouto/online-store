import styled from 'styled-components';

const MainProductDetails = styled.main`
  height: 60vh;
  display: flex;
  margin: 0 5px;
  & div {
    overflow: auto;
    height: inherit;
    width: 100%;
    ::-webkit-scrollbar-track {
    background: transparent;
    }
    ::-webkit-scrollbar {
        width: 4px;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: black;
        /* border-top-left-radius: 70px;
        border-top-right-radius: 70px;
        border-bottom-left-radius: 70px;
        border-bottom-right-radius: 70px; */
    }
  }
`;

export default {
  MainProductDetails,
};
