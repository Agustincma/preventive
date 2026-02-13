import { Box, Container, Typography } from "@mui/material"

interface MainCardProps {
    title: string;
}

const MainCard = ({ title = 'title' }: MainCardProps) => {
    return (
        <div>
            <Container sx={{ width: '300px', height: '120px', display: 'flex', alignContent: 'center', backgroundColor: '#c1c1c1', padding: 2, borderRadius: '20px' }}>
                <Box sx={{ width: '40%', height: '100%', borderRadius: '16px', backgroundColor: '#ccc', marginRight: 1 }}></Box>
                <Box sx={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center',alignItems: 'center' }}>

                    <Typography variant="h5">{title}</Typography>
                </Box>
            </Container>
        </div>
    )
}

export default MainCard
