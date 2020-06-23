import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { FormatQuote } from '@material-ui/icons'

export default function Quote({ quote, author }) {

  return <React.Fragment>

    <Box mt={3}
      width={400}
      height={200}
      display="inline-flex"
      flexDirection="column"
      justifyContent="space-between"
      boxShadow={2}
      p={3}
      borderRadius={5}
    >

      {/* QUOTE ICON */}
      <Box width={50} height={50} mt={-6} display="flex" alignItems="center" justifyContent="center">
        <FormatQuote style={{fontSize: '4rem', transform: 'rotate(180deg)'}} color="primary" />
      </Box>

      {/* THE QUOTE */}
      <Box display="flex" alignItems="center" height="100%" overflow="auto">
        <Typography>
          {quote}
        </Typography>
      </Box>

      {/* THE AUTHOR */}
      <Box fontStyle="italic" fontSize={1}>
        <Typography color={"primary"}>
        - {author}
        </Typography>
      </Box>
    </Box>


  </React.Fragment>
}