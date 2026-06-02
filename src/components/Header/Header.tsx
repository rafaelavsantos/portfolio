import { AppBar, Button, Container, IconButton, Stack, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "/logo.svg";

const navbar = [
  {
    name: "home",
    icon: <HomeIcon />
  },
  {
    name: "skills",
    icon: <PsychologyIcon />
  },
  {
    name: "projetos",
    icon: <SettingsIcon />
  }
]

export default function Header() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if(section) {
      window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    })
    }
  }

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        background: '#001B5E',
        borderBottom: '1px solid #94a3b8'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            py: 1
          }}
        >
          <IconButton>
            <img
              src={logo}
              alt="Logo"
              width={35}
              height={35}
            />
          </IconButton>

          <Stack direction='row' spacing={2}>
            {navbar.map((nav) => (
              <Button
                onClick={() => handleScroll(nav.name)}
                key={nav.name}
                color='inherit'
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex'
                  }
                }}>
                {nav.name}
              </Button>
            ))}

            {navbar.map((nav) => (
              <IconButton
                onClick={() => handleScroll(nav.name)}
                key={nav.name}
                sx={{
                  display: {
                    xs: 'flex',
                    md: 'none'
                  },
                  color: '#fff'
                }}>
                {nav.icon}
              </IconButton>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
