import { styled } from "@mui/system";

const Container = styled('section')({
    height: '85vh',
    overflow: 'auto',
    padding: '15px 5px',
    margin: 20,

    '&::-webkit-scrollbar': {
      width: '0',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    }
  })

const NoResult = styled('p')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 10
  })

const ContainerCard = styled('section')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  })

export {
  Container,
  NoResult,
  ContainerCard
};
