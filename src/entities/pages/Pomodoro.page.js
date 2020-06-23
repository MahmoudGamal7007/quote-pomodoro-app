
import React, { useState } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { Box, CircularProgress, Button, Typography } from '@material-ui/core'
import { PlayArrow, SkipNext, RotateLeft, Pause } from '@material-ui/icons';

// INIT THE TIME FORMATTER
momentDurationFormatSetup(moment);

export default function PomodoroPage() {

  const [value, setValue] = useState({
    workSession: 25 * 60, // 25 MINUTES
    running: false,
    mode: 'session',
    breakSession: 5 * 60, // 5 MINUTES
    lable: 'Work Time'
  })



  function startCounting() {
    let workCount = value.mode === 'session' ? value.workSession : value.breakSession
    const _t = () => {
      if (workCount > 0) {// CHECK IF THE COUNTER IS ZERO OR LESS
        workCount-- // DECREASE BY 1 SECOND

        const coomputedProperty = value.mode === 'session' ? 'workSession' : 'breakSession'
        setValue({ ...value, [coomputedProperty]: workCount, running: true })
      }
      else {
        clearInterval(window._interval)
      }
    }
    window._interval = setInterval(_t, 1000);
  }



  const stopCounting = () => {
    setValue({ ...value, running: false })
    clearInterval(window._interval)
  }



  const toggleCounting = () => {
    if (value.running) {
      stopCounting()
    }
    else {
      startCounting()
    }
  }



  const resetCounter = () => {
    clearInterval(window._interval);

    // 25 MINUTES
    setValue({ ...value, workSession: 1500, running: false, breakSession: 300 })
  }


  const ToggleModes = () => {

    // RESET THE COUNTER FIRST
    resetCounter()

    if (value.mode === 'session') {
      setValue({ ...value, running: false, mode: 'break', lable: 'Break Time' })
    }
    else {
      setValue({ ...value, running: false, mode: 'session', lable: 'Work Time' })
    }
  }


  return <React.Fragment>

    <Box display='flex' height="100vh" justifyContent="center" alignItems="center">

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">

        <Box p={2}>

          <Typography variant="h2">
            {value.lable}
          </Typography>

          <Typography variant="h3">
            {/* mm:ss */}
            {moment.duration(value.mode === 'session' ? value.workSession : value.breakSession, 's').format("mm:ss")}

          </Typography>
        </Box>

        {/* CONDITIONAL RENDERING */}
        {value.mode === 'session' ? <CircularProgress size={250} variant="static" value={value.workSession / 1500 * 100} color="primary" /> : <CircularProgress size={250} variant="static" value={value.breakSession / 300 * 100} color="primary" />}

        {/* START COUNTING BUTTON */}
        <Box m={2} textAlign="center" display="flex" justifyContent="center" alignItems="center">

          {/* RESET */}
          <Box mx={0.5} onClick={() => { resetCounter() }}>
            <Button>
              <RotateLeft />
            </Button>
          </Box>

          <Button onClick={() => { toggleCounting() }} variant="contained">
            {value.running ? <Pause /> : <PlayArrow />}
          </Button>

          {/* NEXT */}
          <Box mx={0.5}>
            <Button>
              <SkipNext onClick={ToggleModes} />
            </Button>
          </Box>

        </Box>

      </Box>
    </Box>
  </React.Fragment>
}

