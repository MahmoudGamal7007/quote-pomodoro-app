
import React, { useState, useEffect } from 'react'
import { Box, CircularProgress, Button, Typography } from '@material-ui/core'
import { PlayArrow, SkipNext, RotateLeft } from '@material-ui/icons';

export default function PomodoroPage() {

  // const [counter, setCounter] = useState(25 * 60);
  const [value, setValue] = useState({ counter: 25 * 60, running: false })

  // const interval = setInterval(startCounting, 1000);

  useEffect(() => {
    // return clearInterval(interval)
    console.log('Hello')
  }, [])

  // function startInterval() {}

  function startCounting() {

    // THE WORK PERIOD
    let workCount = value.counter;

    // THE BREAK PERIOD
    // let breakCount = 5 * 60;


    // CHECK IF THE COUNTER IS ZERO OR LESS
    if (workCount > 0) {
      workCount--
      setValue({ counter: workCount });
    }
    else { clearInterval(window.interval) }

  }

  const resetCounter = function () {
    clearInterval(window.interval);
    setValue({ counter: 25 * 60 })
  }


  return <React.Fragment>

    <Box display='flex' height="100vh" justifyContent="center" alignItems="center">

      <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">

        <Box p={2}>
          <Typography variant="h3">
            {/* MINUTES */}
            {Math.floor(value.counter / 60) >= 10 ? Math.floor(value.counter / 60) : `0${Math.floor(value.counter / 60)}`}:

            {/* SECONDS */}
            {value.counter % 60 > 9 ? value.counter % 60 : `0${value.counter % 60}`}
          </Typography>
        </Box>

        <CircularProgress size={250} variant="static" value={value.counter / 1500 * 100} color="primary" />

        {/* START COUNTING BUTTON */}
        <Box m={2} textAlign="center" display="flex" justifyContent="center" alignItems="center">

          {/* RESET */}
          <Box mx={0.5} onClick={() => { resetCounter() }}>
            <Button>
              <RotateLeft />
            </Button>
          </Box>

          <Button onClick={() => { startCounting() }} variant="contained">
            <PlayArrow />
          </Button>

          {/* NEXT */}
          <Box mx={0.5}>
            <Button>
              <SkipNext />
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  </React.Fragment>
}

