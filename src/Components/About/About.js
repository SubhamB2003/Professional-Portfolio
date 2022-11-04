import { Box, Card, Paper, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react';

import './style.css';

function About(props) {
    return (
        <Box id="about" className={props.toggleMode ? 'bg-gray-900 text-white p-10 bg-about' : 'bg-gray-100 text-black p-10 bg-about'} sx={{ width: "100%" }}>
            {/* <Typography className='text-center text-7xl font-lobster font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900'>About <span className=''>Me</span></Typography> */}
            <Typography className='text-center md:text-7xl text-4xl font-lobster font-bold text-gradient'>About Me</Typography>
            <Paper className={props.toggleMode ? 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-transparent' : 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-black'}>
                <Card className={props.toggleMode ? 'flex justify-center align-middle bg-transparent' : 'flex justify-center align-middle bg-slate-300'}>
                    <img className='w-96' src={require("../../Assets/about-pic.jpg")} alt="My_Pic" />
                </Card>
                <Card className={props.toggleMode ? 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-transparent' : 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-slate-300'}>
                    <Typography className='md:text-4xl text-lg font-serif'>Hey, its Subham here.</Typography>
                    <Typography className='font-serif text-sm md:text-base pt-3'>Hello everyone. A very warm welcome to all of you! It is lovely to have you here!Hello everyone. A very warm welcome to all of you! It is lovely to have you here!</Typography>
                    <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={60} />
                    </Stack>
                </Card>
            </Paper>
        </Box >
    )
}

export default About