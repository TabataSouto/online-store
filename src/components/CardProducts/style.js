import styled from 'styled-components';

const MainCard = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  height: 85vh;
  justify-content: center;
  margin: 20px 0;
  overflow: auto;
  .loading {
    height: 45px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar {
      width: 6px;
      background: transparent;
  }
  ::-webkit-scrollbar-thumb {
      background: transparent;
  }
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 15em;
  margin: 10px 0;
  width: 15em;
`;

export default {
  MainCard,
  Card,
};
