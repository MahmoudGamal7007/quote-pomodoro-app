
import React from 'react'
import { Container, Box, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
export default function IndexPage() {

  const style = makeStyles({
    root: {
      textDecoration: 'none'
    }
  })

  return <React.Fragment>

    <Box>
      <Container>
        <Box className={style.root} display="flex" flexDirection="column" justifyContent="center" height="100vh" alignItems="center">

          {/* POMODORO PAGE */}
          <Link to="/pomodoro">
            <Box width={200} p={3} textAlign="center" boxShadow={1} color="primary" borderRadius={6}>
              Pomodoro Clock
          </Box>
          </Link>

          {/* QUOTES PAGE */}
          <Link to="/quotes">
            <Box width={200} mt={2} p={3} textAlign="center" boxShadow={1} color="primary" borderRadius={6}>
              Quotes Api
          </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  </React.Fragment>
}