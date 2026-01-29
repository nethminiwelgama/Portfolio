import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Container
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

type Project = {
  title: string
  timeframe?: string
  description: string
  highlights: string[]
  tech: string[]
  repo?: string
}

const PROJECTS: Project[] = [
  {
    title: 'E‑commerce Platform Backend',
    timeframe: '2025 – 2026',
    description:
      'Production-ready Spring Boot 3 backend managing full lifecycle e‑commerce operations including product inventory and order processing.',
    highlights: [
      'Increased concurrency capacity from ~100 to 2,000+ concurrent users.',
      'Reduced average API response time by 75% (400ms → 100ms).',
      'Implemented multi‑layer caching that reduced DB query load by 60–80%.',
      'Containerized with Docker to achieve consistent environments across stages.'
    ],
    tech: ['Java 17', 'Spring Boot 3', 'MySQL', 'Hibernate', 'Caffeine Cache', 'Docker'],
    repo: 'https://github.com/nethminiwelgama/E-Commerce-Backend'
  },
  {
    title: 'Resource Hub @ WSO2 (Group)',
    timeframe: '2024 – 2025',
    description:
      'Full‑stack organizational management system for asset tracking, meal scheduling, maintenance requests and role‑based access.',
    highlights: [
      'Designed and implemented robust RBAC using JWT authentication.',
      'Improved manual resource tracking efficiency by ~30%.',
      'Built fully responsive UI for real‑time notifications and complex workflows.'
    ],
    tech: ['React', 'TypeScript', 'JWT', 'REST APIs', 'UI/UX'],
    repo: 'https://github.com/FiveStackDev'
  }
]

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 10, px: { xs: 2, md: 0 } }}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              fontWeight: 700
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            A selection of work that highlights my experience with scalable backend systems, modern
            frontend development, and real-world problem solving. Each project demonstrates my
            commitment to clean code, performance optimization, and impactful results.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {PROJECTS.map((project) => (
            <Grid key={project.title} item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(18, 23, 42, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: '1px solid rgba(0, 217, 255, 0.4)',
                    boxShadow: '0 12px 40px rgba(0, 217, 255, 0.15)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, pb: 2 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2.5}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        flex: 1
                      }}
                    >
                      {project.title}
                    </Typography>
                    {project.timeframe && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#00d9ff',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          ml: 2,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {project.timeframe}
                      </Typography>
                    )}
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#cbd5f5',
                      mb: 2.5,
                      fontSize: '1.05rem',
                      lineHeight: 1.7
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      pl: 2.5,
                      mb: 2.5,
                      m: 0,
                      listStyle: 'none'
                    }}
                  >
                    {project.highlights.map((item) => (
                      <Typography
                        key={item}
                        component="li"
                        variant="body2"
                        sx={{
                          color: '#cbd5f5',
                          mb: 1.2,
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          pl: 2,
                          position: 'relative',
                          '&::before': {
                            content: '"→"',
                            position: 'absolute',
                            left: 0,
                            color: '#00d9ff',
                            fontWeight: 700
                          }
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {project.tech.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 217, 255, 0.1)',
                          borderColor: 'rgba(0, 217, 255, 0.3)',
                          color: '#00d9ff',
                          fontWeight: 600,
                          fontSize: '0.85rem'
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
                  {project.repo && (
                    <Button
                      size="small"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardIcon sx={{ fontSize: '0.9rem' }} />}
                      sx={{
                        fontWeight: 600,
                        color: '#00d9ff',
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 217, 255, 0.1)'
                        }
                      }}
                    >
                      View Code
                    </Button>
                  )}
                  <Button
                    size="small"
                    href="#contact"
                    sx={{
                      fontWeight: 600,
                      color: '#cbd5f5',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      '&:hover': {
                        color: '#00d9ff'
                      }
                    }}
                  >
                    Get in touch
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

