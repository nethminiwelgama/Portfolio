import React from 'react'
import { Box, Typography, Link, Stack } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 8,
        borderTop: '1px solid rgba(148,163,184,0.35)',
        backgroundColor: '#020617'
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Nethmini Welgama. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="https://www.linkedin.com/in/nethminiwelgama"
            target="_blank"
            rel="noreferrer"
            variant="body2"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/nethminiwelgama"
            target="_blank"
            rel="noreferrer"
            variant="body2"
          >
            GitHub
          </Link>
          <Link href="#projects" variant="body2">
            Portfolio
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
