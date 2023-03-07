import { styled } from "@mui/system";

const Container = styled('section')({
    width: '98.5%',
    margin: '5px 10px',
    display: 'flex',
  })

  const SearchContainer = styled('div')({
    width: '100%'
  })

const SearchComponent = styled('div')({
    width: 'inherit',
    // display: 'flex',
    // padding: '1px 20px',
    // justifyContent: 'space-around'
  })

export {
  Container,
  SearchContainer,
  SearchComponent,
}
