import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const MESSAGES = ['Hi!', 'Welcome', 'Welcome to my portfolio']

const DURATION_SHOW = 2200
const DURATION_VANISH = 600
const DURATION_GAP = 500

export default function RobotSpeechBubble() {
  const [index, setIndex] = useState(0)
  const [showing, setShowing] = useState(true)

  useEffect(() => {
    if (showing) {
      const t = setTimeout(() => setShowing(false), DURATION_SHOW)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length)
        setShowing(true)
      }, DURATION_VANISH + DURATION_GAP)
      return () => clearTimeout(t)
    }
  }, [showing])

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '18%',
        left: '5%',
        zIndex: 10,
        opacity: showing ? 1 : 0,
        transform: showing ? 'scale(1)' : 'scale(0.92)',
        transition: `opacity ${DURATION_VANISH}ms ease, transform ${DURATION_VANISH}ms ease`,
        filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          background: 'rgba(10, 14, 39, 0.94)',
          border: '2px solid rgba(0, 217, 255, 0.85)',
          borderRadius: '12px',
          boxShadow: `
            0 0 14px rgba(0, 217, 255, 0.35),
            inset 0 0 24px rgba(0, 217, 255, 0.06)
          `,
          px: 2,
          py: 1.5,
          minWidth: 160,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: 28,
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid rgba(0, 217, 255, 0.85)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 217, 255, 0.25))'
          }
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'rgba(0, 217, 255, 0.95)',
            textAlign: 'center'
          }}
        >
          {MESSAGES[index]}
        </Typography>
      </Box>
    </Box>
  )
}
