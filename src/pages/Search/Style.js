import { styled } from "@mui/system";

const Container = styled('section')({
    width: '98.5%',
    margin: '5px 10px',
    display: 'flex',
  })

  const SearchContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
  })

const SearchComponent = styled('div')({
    width: 'inherit',
    padding: '5px 10px'
    // display: 'flex',
    // padding: '1px 20px',
  })

export {
  Container,
  SearchContainer,
  SearchComponent,
}
