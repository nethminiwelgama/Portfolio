import React from 'react'
import { ThemeProvider, CssBaseline, Container, Box, Toolbar } from '@mui/material'
import theme from './theme'
import AppHeader from './components/AppHeader'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <Toolbar />
      <Container maxWidth={false} disableGutters>
        <Box component="main">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
