import { styled } from "@mui/system";

const Container = styled('section')({
    width: '98.5%',
    margin: '5px 10px',
    display: 'flex',
  })

  const SearchContainer = styled('div')({
    width: '100%',
  })

const SearchComponent = styled('div')({
    width: 'inherit',
    paddingTop: 5,
    paddingLeft: 10
  })

export {
  Container,
  SearchContainer,
  SearchComponent,
}
