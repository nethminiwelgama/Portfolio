import React, { useState, useCallback } from 'react'
import { Box, Typography, Button, Stack, Container } from '@mui/material'
import HeroBg from '../assets/herobg.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { HeroRobotScene } from './HeroRobotScene'
import RobotSpeechBubble from './RobotSpeechBubble'

const HERO_SUBTITLE =
  'Software Engineer Intern & third-year B.Sc. (Hons) Information Technology student at University of Moratuwa. Building scalable full-stack applications with React, TypeScript, Spring Boot, .NET and Docker.'

export default function Hero() {
  const [cursorNorm, setCursorNorm] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setCursorNorm({ x, y })
    },
    []
  )

  const handleMouseLeave = useCallback(() => setCursorNorm(null), [])

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        minHeight: { xs: '80vh', md: '90vh' },
        position: 'relative',
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
        overflow: 'hidden',
        pt: { xs: 3, md: 0 },
        background: `linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.85) 40%, rgba(10,14,39,0.9) 100%), url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: { xs: 'flex-start', md: 'center' }, flexWrap: { xs: 'wrap', md: 'nowrap' }, width: '100%', gap: { md: 6 }, px: { xs: 2, sm: 3 }, justifyContent: { md: 'space-between' } }}>
        <Stack spacing={3.5} sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' }, maxWidth: { md: 580 }, width: '100%', justifyContent: { md: 'center' } }}>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '0.85rem', md: '0.9rem' },
              fontWeight: 500,
              letterSpacing: 3,
              color: 'rgba(0, 217, 255, 0.9)',
              textTransform: 'uppercase',
              display: 'block'
            }}
          >
            Portfolio
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.25rem', lg: '3.75rem' },
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              color: '#fff'
            }}
          >
            Hi, I'm Nethmini —
            <br />
            <Box
              component="span"
              sx={{
                color: 'rgba(0, 217, 255, 0.95)',
                fontWeight: 500
              }}
            >
              software engineer
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 540,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.75,
              color: 'rgba(203, 213, 245, 0.9)',
              fontWeight: 400
            }}
          >
            {HERO_SUBTITLE}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 0.5 }}
          >
            <Button
              variant="contained"
              href="#projects"
              endIcon={<ArrowOutwardIcon sx={{ fontSize: '1.1rem' }} />}
              sx={{
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
                borderRadius: '6px',
                background: 'rgba(0, 217, 255, 0.9)',
                color: '#0a0e27',
                textTransform: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(0, 217, 255, 1)',
                  boxShadow: '0 4px 20px rgba(0, 217, 255, 0.25)'
                }
              }}
            >
              View work
            </Button>
            <Button
              variant="text"
              href="#contact"
              sx={{
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
                color: 'rgba(203, 213, 245, 0.9)',
                textTransform: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#00d9ff',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Get in touch
            </Button>
          </Stack>

          <Stack direction="row" spacing={2.5} sx={{ pt: 0.5 }}>
            <Button
              href="https://www.linkedin.com/in/nethminiwelgama"
              target="_blank"
              rel="noreferrer"
              sx={{
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'rgba(203, 213, 245, 0.8)',
                minWidth: 0,
                px: 0,
                '&:hover': { color: '#00d9ff', backgroundColor: 'transparent' }
              }}
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/nethminiwelgama"
              target="_blank"
              rel="noreferrer"
              sx={{
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'rgba(203, 213, 245, 0.8)',
                minWidth: 0,
                px: 0,
                '&:hover': { color: '#00d9ff', backgroundColor: 'transparent' }
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Stack>

        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '1 1 50%' },
            display: { xs: 'none', md: 'flex' },
            height: { md: '75vh' },
            minHeight: { md: 480 },
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: { md: 520 }
          }}
        >
          <RobotSpeechBubble />
          <HeroRobotScene cursorNorm={cursorNorm} />
        </Box>
      </Container>
    </Box>
  )
}

