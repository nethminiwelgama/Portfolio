import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function AppHeader() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(10, 14, 39, 0.8)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        top: 0,
        zIndex: 1200
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ py: 1.5, px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: -0.5,
              fontSize: '1.4rem',
              background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Nethmini
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button
              color="inherit"
              href="#home"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                  transition: 'width 0.3s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#about"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                  transition: 'width 0.3s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                  transition: 'width 0.3s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              Resume
            </Button>
            <Button
              color="inherit"
              href="#contact"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                  transition: 'width 0.3s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

