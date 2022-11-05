import { Box, Card, Paper, Stack, Typography } from '@mui/material'
import React from 'react';

import './style.css';

function About(props) {
    return (
        <Box id="about" className={props.toggleMode ? 'bg-gray-900 ' : 'bg-gray-100'} sx={{ width: "100%", height: "120vh" }}>
            {/* <Typography className='text-center text-7xl font-lobster font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900'>About <span className=''>Me</span></Typography> */}
            <Box className='bg-gradient-to-r to-blue-700 via-blue-800 from-gray-900 rounded-r-full' sx={{ width: "100%", height: "120vh" }}>
                <Box className='mx-16'>
                    <Typography className='text-center md:text-7xl text-4xl font-lobster font-bold text-yellow-400'>About Me</Typography>
                    <Paper className={props.toggleMode ? 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-transparent' : 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-gray-300'}>
                        <Card className={props.toggleMode ? 'flex justify-center align-middle bg-transparent' : 'flex justify-center align-middle bg-slate-200'}>
                            <img className='w-96' src={require("../../Assets/about-pic.jpg")} alt="My_Pic" />
                        </Card>
                        <Card className={props.toggleMode ? 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-transparent' : 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-slate-200'}>
                            <Typography className='md:text-4xl text-lg font-serif'>Hello!</Typography>
                            <Typography className='font-serif text-sm md:text-base pt-3'>
                                I am Subham Bhattacharjee. I am from Hooghly, West Bengal. Currently pursuing Bachelor of Technology major in Computer Science and Engineering.
                                I am in my 3rd Year and a passionate MERN Stack Developer.</Typography>
                            <Stack spacing={1}>
                                <Typography className='font-serif text-sm md:text-base pt-3'>In my free time i was Listening Music, Playing games, exploreing new technologies, etc.</Typography>
                            </Stack>
                        </Card>
                    </Paper>
                </Box>
            </Box>
        </Box >
    )
}

export default About