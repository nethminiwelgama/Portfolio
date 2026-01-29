import React from 'react'
import { Box, Typography, Button, Stack, Container } from '@mui/material'
import HeroBg from '../assets/herobg.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const HERO_SUBTITLE =
  'Software Engineer Intern & third-year B.Sc. (Hons) Information Technology student at University of Moratuwa. Building scalable full-stack applications with React, TypeScript, Spring Boot, .NET and Docker.'

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: '80vh', md: '90vh' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        mt: 10,
        background: `linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.85) 40%, rgba(10,14,39,0.9) 100%), url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,217,255,0.2) 0%, rgba(0,217,255,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,188,212,0.15) 0%, rgba(0,188,212,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} sx={{ maxWidth: { xs: 600, md: 700, lg: 800 } }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 4,
                background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                fontWeight: 700,
                mb: 2,
                display: 'inline-block'
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.8rem', md: '3.8rem', lg: '4.5rem' },
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.15,
              color: '#ffffff'
            }}
          >
            Hi, I'm Nethmini
            <br />
            <span style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Software Engineer
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              fontSize: { xs: '1.05rem', md: '1.15rem' },
              lineHeight: 1.8,
              color: '#cbd5f5',
              fontWeight: 400
            }}
          >
            {HERO_SUBTITLE}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#projects"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 600,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                color: '#000',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(0, 217, 255, 0.35)'
                }
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 600,
                borderRadius: '8px',
                borderColor: 'rgba(0, 217, 255, 0.5)',
                color: '#00d9ff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#00d9ff',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            <Button
              href="https://www.linkedin.com/in/nethminiwelgama"
              target="_blank"
              rel="noreferrer"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#cbd5f5',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#00d9ff'
                }
              }}
            >
              LinkedIn →
            </Button>
            <Button
              href="https://github.com/nethminiwelgama"
              target="_blank"
              rel="noreferrer"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#cbd5f5',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#00d9ff'
                }
              }}
            >
              GitHub →
            </Button>
          </Stack>
        </Stack>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
      `}</style>
    </Box>
  )
}

