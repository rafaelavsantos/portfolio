import { Box, Container, Stack, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const images = [
    {
        category: 'Brechó',
        description: 'Projeto desenvolvido com o objetivo de apresentar os bens disponíveis para os servidores da Prefeitura Municipal de Vitória da Conquista (PMVC), permitindo que eles visualizem os itens disponíveis e realizem solicitações de forma organizada e intuitiva. A aplicação foi pensada para facilitar o acesso às informações, promovendo transparência e melhor aproveitamento dos recursos, além de otimizar o processo de solicitação dos bens por parte dos servidores. O sistema apresenta uma interface moderna e responsiva, focada na experiência do usuário, com listagem clara dos itens, detalhes dos bens e fluxo simples de solicitação. ', 
        items: [
            "/img/brecho/brecho1.jpeg",
            "/img/brecho/brecho2.jpeg",
            "/img/brecho/brecho3.jpeg",
            "/img/brecho/brecho4.jpeg",
            "/img/brecho/brecho5.jpeg", 
            "/img/brecho/brecho6.jpeg",
            "/img/brecho/brecho7.jpeg"
        ]
    },
    {
        category: 'SGL',
        description: 'Projeto desenvolvido com o objetivo de organizar e acompanhar leituras de forma prática e visual, permitindo o gerenciamento completo dos livros lidos, em leitura e a serem lidos. A aplicação oferece uma visão clara do progresso de leitura, facilitando o controle pessoal e incentivando o hábito da leitura. O sistema permite o cadastro, edição e exclusão de livros, além da exibição da capa de cada obra, tornando a experiência mais intuitiva e atrativa. ',
        items: [
            "/img/sgl/sgl1.png",
            "/img/sgl/sgl2.png",
            "/img/sgl/sgl3.png",
            "/img/sgl/sgl4.png",
            "/img/sgl/sgl5.png", 
            "/img/sgl/sgl6.png",
            "/img/sgl/sgl7.png",
            "/img/sgl/sgl8.png",
            "/img/sgl/sgl9.png",
            "/img/sgl/sgl10.png"
        ]
    }
]

export default function Projects() {
    return (
        <Box id="projetos"
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
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 2
                    }}>
                        <SettingsIcon sx={{ color: '#fff', mb: 0.5 }} fontSize="large" />
                        <Typography variant="h4" sx={{
                            fontWeight: 700,
                        }}>
                            Projetos
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        {images.map((group) => (
                            <Stack key={group.category} direction={{
                                xs: 'column-reverse', md: 'row'
                            }} sx={{ backgroundColor: '#fff', borderRadius: 4}} spacing={4}>
                                <Box sx={{ flex: 1, px: 4, textAlign: "justify" }}>
                                    <Typography variant="h4" sx={{ mb: 3, pt: {md: 4}, color: '#000' }}>
                                        {group.category}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: '#000', lineHeight: 1.8, pb: {sm: 5}}}>
                                        {group.description}
                                    </Typography>
                                </Box>

                                <Box sx={{ flex: 1, width: '100%', minWidth: 0, px: { md: 5}}}>
                                    <Swiper spaceBetween={20} slidesPerView={1} modules={[Navigation]} navigation>
                                        {group.items.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <Box
                                                    component="img"
                                                    src={image}
                                                    alt={group.category}
                                                    sx={{
                                                        width: '100%',
                                                        height: {
                                                            xs: 250,
                                                            sm: 350, 
                                                            md: 450
                                                        },
                                                        objectFit: 'contain',
                                                        borderRadius: 4
                                                    }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}