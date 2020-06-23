import React, { useEffect } from 'react';
import Quote from '../components/Quote.component';
import { Button, Container, Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux'
import { FetchQuotes } from '../../store/quotes/store'

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Merriweather', serif"
  }
})

function QuotesPage(props) {

  useEffect(() => {

    getRandomQuote()

  }, [])

  function getRandomQuote() {
    props.FetchQuotes()
  }

  return <React.Fragment>

    <ThemeProvider theme={theme}>
      <Box bgcolor="#fff6e9">
        <Container>
          <Box height="100vh" alignItems="center" flexDirection="column" display="flex" justifyContent="center">

            {/* GET NEW QUOTE */}
            <Button color="primary" variant="outlined" my={1} onClick={() => {getRandomQuote()}}>New Quote</Button>

            <Quote boxShadow={3} quote={props.data.quote} author={props.data.author} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>

  </React.Fragment>
}


const mapStateToProps = state => {
  return {
    // numOfCakes: state.numOfCakes
    loading: state.loading,
    data: state.data,
    error: state.error
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
    FetchQuotes: () => { dispatch(FetchQuotes()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage)