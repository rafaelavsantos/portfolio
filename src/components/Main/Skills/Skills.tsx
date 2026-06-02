import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import PsychologyIcon from '@mui/icons-material/Psychology';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800]
        }),
    },
    [`&.${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#3D5AFE',
        ...theme.applyStyles('dark', {
            backgroundColor: '#3D5AFE'
        })
    },
}));

const skills = [
    {
        name: "Vue.js 3",
        percentage: 90
    },
    {
        name: "Quasar Framework",
        percentage: 90
    },
    {
        name: "Vuetify",
        percentage: 50
    },
    {
        name: "React",
        percentage: 50
    },
    {
        name: "React Native",
        percentage: 50
    },
    {
        name: "Pinia",
        percentage: 50
    }
]

export default function Skills() {
    return (
        <Box id="skills"
            sx={{
                display: 'flex',
                alignItems: 'center',
                background: '#001B5E',
                color: '#fff',
                borderBottom: '1px solid #94a3b8',
                py: 5
            }}
        >
            <Container maxWidth="lg">
                <Stack>
                    <Box  sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center', 
                        marginBottom: 2
                    }}>
                        <PsychologyIcon sx={{color: '#fff', mb: 0.5}} fontSize="large" />
                        <Typography variant="h4" sx={{
                            fontWeight: 700,
                        }}>
                            Skills
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px'
                        }}
                    >
                        {skills.map((skill) => (
                            <Box
                                key={skill.name}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '48%' }
                                }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography variant="body1" sx={{
                                        fontWeight: 700,
                                    }}>
                                        {skill.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        fontWeight: 700,
                                    }}>
                                        {skill.percentage}%
                                    </Typography>
                                </Box>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={skill.percentage}
                                    aria-label="Export data"
                                />
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}