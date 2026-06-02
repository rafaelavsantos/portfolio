import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import perfil from "/perfil.jpg";

const sociais = [
    {
        name: 'Linkedin',
        icon: <LinkedInIcon />,
        href: 'https://www.linkedin.com/in/rafaelasantoss/'
    },
    {
        name: 'Instagram',
        icon: <InstagramIcon />,
        href: 'https://www.instagram.com/rafaelavsantosdev'
    },
    {
        name: 'GitHub',
        icon: <GitHubIcon />,
        href: 'https://github.com/rafaelavsantos'
    }
]

export default function About() {
    return (
        <Box id="home"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                background: '#001B5E',
                color: '#fff',
                pt: 10,
                borderBottom: '1px solid #94a3b8'
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        my: 4
                    }}
                >
                    <Box sx={{ maxWidth: 600 }}>
                        <Typography variant="h3" sx={{
                            fontWeight: 700,
                        }}>
                            Rafaela Santos
                        </Typography>

                        <Typography variant="h6" sx={{
                            color: '#94a3b8',
                            mb: 2,
                        }}>
                            Desenvolvedora Front-end | Vue.js | React
                        </Typography>

                        <Typography variant="h6" sx={{
                            color: '#fff',
                            mb: 4,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                            textIndent: '20px'
                        }}>
                            Sou uma Desenvolvedora Front-end, atualmente aprofundando meus conhecimentos em frontend com Vuetify. Busco construir aplicações modernas, escaláveis e bem estruturadas, aplicando boas práticas e explorando diferentes tecnologias. Tenho experiência em projetos pessoais, como sistemas de organização de leituras e gerenciamento de cuidados para pets, que me ajudam a aplicar na prática conceitos de CRUD, autenticação, banco de dados e integrações.
                        </Typography>

                        <Stack direction='row' spacing={2}>
                            {sociais.map((social) => (
                                <Button
                                    key={social.name}
                                    variant="contained"
                                    size="large"
                                    href={social.href}
                                    target="_blank"
                                    sx={{
                                        bgcolor: 'primary.main',
                                        display: {
                                            xs: 'none',
                                            md: 'flex'
                                        }
                                    }}>
                                    {social.name}
                                </Button>
                            ))}


                            {sociais.map((social) => (
                                <IconButton
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            md: 'none'
                                        },
                                        color: '#fff'
                                    }}>
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Box>

                    <Box
                        component='img'
                        src={perfil}
                        alt="Foto de Perfil"
                        sx={{
                            width: { xs: 150, sm: 250, md: 350 },
                            height: { xs: 150, sm: 250, md: 350 },
                            objectFit: 'cover',
                            borderRadius: '50%',
                            border: '4px solid #3D5AFE'
                        }}
                    />
                </Stack>
            </Container>
        </Box>
    )
}