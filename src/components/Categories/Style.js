import { styled } from "@mui/system";

const Container = styled('section')({
    width: 280,
    border: '1px solid gray',
    padding: 10,
    overflow: 'auto',
    height: '98.5vh',

    '&::-webkit-scrollbar': {
      width: '0.3em',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      // outline: '1px solid slategrey',
    }
  })

// código pronto da documentação Material UI
const BpIcon = styled('span')({
    borderRadius: '50%',
    width: 10,
    height: 10,
    boxShadow: '0 0 0 1px rgb(16 22 26 / 20%)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))',

    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19, 124, 189, 0.6)',
      outlineOffset: 2,
    },
  });
  
const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0))',

    '&:before': {
      backgroundImage: 'radial-gradient(white, white 20%, transparent 32%)',
      content: "''",
      display: 'block',
      height: 10,
      width: 10,
    },
  });

export {
  Container,
  BpIcon,
  BpCheckedIcon
}
