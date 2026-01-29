import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          backdropFilter: 'blur(30px)',
          backgroundColor: scrolled
            ? 'rgba(10, 14, 39, 0.95)'
            : 'rgba(10, 14, 39, 0.7)',
          borderBottom: scrolled
            ? '1px solid rgba(0, 217, 255, 0.2)'
            : '1px solid rgba(148, 163, 184, 0.1)',
          top: 0,
          zIndex: 1200,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ py: 2, px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 900,
                letterSpacing: -1,
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              Nethmini
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  href={item.href}
                  sx={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    position: 'relative',
                    padding: '8px 16px',
                    color: '#cbd5f5',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #00d9ff, #00bcd4)',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    },
                    '&:hover': {
                      color: '#00d9ff',
                      transform: 'translateY(-2px)',
                      '&::before': {
                        width: '100%'
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(90deg)'
                  }
                }}
              >
                {mobileMenuOpen ? (
                  <CloseIcon sx={{ fontSize: '1.5rem' }} />
                ) : (
                  <MenuIcon sx={{ fontSize: '1.5rem' }} />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 14, 39, 0.98)',
            backdropFilter: 'blur(30px)',
            borderBottom: '1px solid rgba(0, 217, 255, 0.2)',
            zIndex: 1100,
            animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '@keyframes slideDown': {
              from: {
                opacity: 0,
                transform: 'translateY(-10px)'
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          <Box sx={{ py: 2, px: 2 }}>
            {navItems.map((item, index) => (
              <Button
                key={item.href}
                fullWidth
                color="inherit"
                href={item.href}
                onClick={toggleMobileMenu}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  justifyContent: 'flex-start',
                  py: 1.25,
                  px: 2,
                  color: '#cbd5f5',
                  mb: 0.5,
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  animation: `slideIn 0.3s ease ${index * 0.05}s both`,
                  '@keyframes slideIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-20px)'
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)'
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 0,
                    height: '100%',
                    background: 'rgba(0, 217, 255, 0.1)',
                    zIndex: -1,
                    transition: 'width 0.3s ease'
                  },
                  '&:hover': {
                    color: '#00d9ff',
                    '&::before': {
                      width: '100%'
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <Box
          onClick={toggleMobileMenu}
          sx={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1099,
            animation: 'fadeIn 0.3s ease',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 }
            }
          }}
        />
      )}
    </>
  )
}

