import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Container, Drawer, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

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
            {navItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                href={item.href}
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
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(10, 14, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
            mt: 8
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={toggleMobileMenu} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                fullWidth
                color="inherit"
                href={item.href}
                onClick={toggleMobileMenu}
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  justifyContent: 'flex-start',
                  py: 1.5,
                  color: '#cbd5f5',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    color: '#00d9ff'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}

