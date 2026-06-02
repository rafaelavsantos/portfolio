import { Box, Stack } from '@mui/material'

export default function Footer() {
  return (
    <Stack sx={{
      background: '#001B5E',
      py: 3,
      alignItems: 'center'
    }}
    >
      <Box 
        component='img'
        src='src\assets\logo.svg'
        alt='Logo'
        sx={{
          width: '35px',
          height: '35px',
          display: 'block'
        }}
      />      
    </Stack>
  )
}
