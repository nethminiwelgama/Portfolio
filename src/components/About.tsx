import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import Portrait from '../assets/Image.jpeg'

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 10,
          px: { xs: 2, md: 0 }
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            mb: 6,
            fontSize: { xs: '2.2rem', md: '2.8rem' },
            fontWeight: 700
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#cbd5f5'
                }}
              >
                I'm a Software Engineer Intern and third-year B.Sc. (Hons) Information Technology
                student at the University of Moratuwa. I'm passionate about designing and building
                full-stack applications that balance clean architecture, high performance, and
                exceptional user experiences.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#cbd5f5'
                }}
              >
                Recently, I've been focused on creating production-ready Spring Boot microservices,
                developing responsive React frontends with modern tooling, and deploying containerized
                applications using Docker. I enjoy solving real-world challenges like optimizing
                e-commerce platforms, managing resources efficiently, and building internal tools
                that empower teams.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#cbd5f5'
                }}
              >
                I'm actively seeking full-time software engineering opportunities where I can
                contribute to impactful products while growing as an engineer. Let's build something
                amazing together.
              </Typography>

              {/* Skills Grid */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, fontSize: '1.2rem', fontWeight: 700 }}
                >
                  Core Skills
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'React & TypeScript',
                    'Spring Boot 3',
                    'Java 17',
                    '.NET / C#',
                    'Docker',
                    'MySQL & Databases',
                    'Microservices',
                    'REST APIs',
                    'System Design',
                    'UI/UX',
                    'Agile/Scrum',
                    'AWS Basics'
                  ].map((skill) => (
                    <Grid item xs={6} sm={4} key={skill}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '8px',
                          backgroundColor: 'rgba(0, 217, 255, 0.08)',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          textAlign: 'center',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 217, 255, 0.15)',
                            borderColor: 'rgba(0, 217, 255, 0.4)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#00d9ff'
                          }}
                        >
                          {skill}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 380
                }}
              >
                {/* Gradient border effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(0, 188, 212, 0.3))',
                    borderRadius: '12px',
                    padding: '2px',
                    zIndex: -1
                  }}
                />
                <Box
                  component="img"
                  src={Portrait}
                  alt="Nethmini Welgama portrait"
                  sx={{
                    width: '100%',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 20px 60px rgba(0, 217, 255, 0.15)',
                    display: 'block',
                    backgroundColor: 'rgba(10, 14, 39, 0.5)'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
