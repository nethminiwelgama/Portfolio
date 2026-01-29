import React from 'react'
import { Box, Typography, TextField, Button, Stack, Link, Paper, Container, Grid } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const body = encodeURIComponent(
      `Hi Nethmini,\n\nMy name is ${name}.\n\n${formData.get('message') || ''}\n\nBest regards,\n${name}`
    )
    window.location.href = `mailto:nethmininwelgama@gmail.com?subject=Portfolio%20contact&body=${body}`
  }

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
            Let's Work Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#cbd5f5',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: 700
            }}
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have
            a question or just want to say hi, feel free to reach out!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Methods */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3.5 },
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 217, 255, 0.08)',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 217, 255, 0.12)',
                    borderColor: 'rgba(0, 217, 255, 0.5)'
                  }
                }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 2 }} alignItems={{ xs: 'flex-start', sm: 'flex-start' }}>
                  <EmailIcon sx={{ color: '#00d9ff', fontSize: { xs: '1.5rem', md: '1.8rem' }, flexShrink: 0, mt: { xs: 0, sm: 0.5 } }} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 700 }}>
                      Email
                    </Typography>
                    <Link
                      href="mailto:nethmininwelgama@gmail.com"
                      sx={{
                        color: '#cbd5f5',
                        textDecoration: 'none',
                        fontSize: { xs: '0.9rem', md: '1.05rem' },
                        transition: 'color 0.3s ease',
                        wordBreak: 'break-word',
                        '&:hover': {
                          color: '#00d9ff'
                        }
                      }}
                    >
                      nethmininwelgama@gmail.com
                    </Link>
                  </Box>
                </Stack>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3.5 },
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 188, 212, 0.08)',
                  border: '1px solid rgba(0, 188, 212, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 188, 212, 0.12)',
                    borderColor: 'rgba(0, 188, 212, 0.5)'
                  }
                }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 2 }} alignItems={{ xs: 'flex-start', sm: 'flex-start' }}>
                  <PhoneIcon sx={{ color: '#00bcd4', fontSize: { xs: '1.5rem', md: '1.8rem' }, flexShrink: 0, mt: { xs: 0, sm: 0.5 } }} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="h6" sx={{ mb: 0.5, fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 700 }}>
                      Phone
                    </Typography>
                    <Typography
                      sx={{
                        color: '#cbd5f5',
                        fontSize: { xs: '0.9rem', md: '1.05rem' }
                      }}
                    >
                      +94 72 568 2258
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              <Box>
                <Typography variant="h6" sx={{ mb: 2.5, fontSize: '1.1rem', fontWeight: 700 }}>
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link
                    href="https://www.linkedin.com/in/nethminiwelgama"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        borderColor: '#00d9ff',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <LinkedInIcon sx={{ color: '#00d9ff' }} />
                  </Link>
                  <Link
                    href="https://github.com/nethminiwelgama"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                      height: 50,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      border: '1px solid rgba(0, 188, 212, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 188, 212, 0.2)',
                        borderColor: '#00bcd4',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <GitHubIcon sx={{ color: '#00bcd4' }} />
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '12px',
                backgroundColor: 'rgba(18, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.2)'
              }}
            >
              <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      fontSize: '1rem',
                      '& fieldset': {
                        borderColor: 'rgba(148, 163, 184, 0.2)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 217, 255, 0.4)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00d9ff',
                        boxShadow: '0 0 0 1px rgba(0, 217, 255, 0.2)'
                      }
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ffffff'
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#cbd5f5',
                      opacity: 0.7
                    },
                    '& .MuiInputLabel-root': {
                      color: '#cbd5f5',
                      fontSize: '1rem'
                    }
                  }}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      fontSize: '1rem',
                      '& fieldset': {
                        borderColor: 'rgba(148, 163, 184, 0.2)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 217, 255, 0.4)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00d9ff',
                        boxShadow: '0 0 0 1px rgba(0, 217, 255, 0.2)'
                      }
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ffffff'
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#cbd5f5',
                      opacity: 0.7
                    },
                    '& .MuiInputLabel-root': {
                      color: '#cbd5f5',
                      fontSize: '1rem'
                    }
                  }}
                />
                <TextField
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      fontSize: '1rem',
                      '& fieldset': {
                        borderColor: 'rgba(148, 163, 184, 0.2)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 217, 255, 0.4)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00d9ff',
                        boxShadow: '0 0 0 1px rgba(0, 217, 255, 0.2)'
                      }
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#ffffff'
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: '#cbd5f5',
                      opacity: 0.7
                    },
                    '& .MuiInputLabel-root': {
                      color: '#cbd5f5',
                      fontSize: '1rem'
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.5,
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #00d9ff 0%, #00bcd4 100%)',
                    color: '#000',
                    mt: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(0, 217, 255, 0.35)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
