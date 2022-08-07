import styled from 'styled-components';

const PageContainer = styled.section`
  display: flex;
  height: 100vh;
`;

const CategoriesContainer = styled.section`
  flex-basis: 20%;
`;

const ContainerSearch = styled.section`
  flex-basis: 80%;
  & div {
    align-items: center;
    display: flex;
    & button:nth-child(1) {
      height: 20px;
      & img {
        width: 15px;
      }
    }
  }
`;

export default {
  PageContainer,
  CategoriesContainer,
  ContainerSearch,
};
