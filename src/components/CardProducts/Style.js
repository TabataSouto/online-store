import { styled } from "@mui/system";

const Container = styled('section')({
    height: '89vh',
    overflow: 'auto',
    padding: '15px 5px',
    marginTop: 10,

    '&::-webkit-scrollbar': {
      width: '0.3em',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
