import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React from 'react';
import { Typography } from '@mui/material';
const HomePage = () => {
    return (
    <React.Fragment>
    <CssBaseline/>
    <Container maxWidth="sm">
        <Typography variant="h2" 
        gutterBottom 
        sx={{width:"800px", fontStyle:"italic"}}>Welcome to your homepage</Typography>
    </Container>
    </React.Fragment>
    )
}
export default HomePage;