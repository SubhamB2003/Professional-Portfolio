import { Box, Card, Paper, Typography } from '@mui/material'
import React from 'react';

import './style.css';

function About(props) {
    return (
        <Box id="about" className={props.toggleMode ? 'bg-gray-900 text-white p-10' : 'bg-gray-300 text-black p-10'} sx={{ height: "115vh", width: "100%" }}>
            {/* <Typography className='text-center text-7xl font-lobster font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900'>About <span className=''>Me</span></Typography> */}
            <Typography className='text-center text-7xl font-lobster font-bold'>About Me</Typography>
            <Paper className={props.toggleMode ? 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-gradient-to-t from-gray-900 via-blue-900 to-gray-900' : 'grid md:grid-cols-2 md:mt-16 mt-5 md:p-10 p-4 bg-black'}>
                <Card className={props.toggleMode ? 'flex justify-center align-middle bg-black' : 'flex justify-center align-middle bg-slate-300'}>
                    <img className='w-96' src={require("../../Assets/about-pic.jpg")} alt="My_Pic" />
                </Card>
                <Card className={props.toggleMode ? 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-black' : 'flex flex-col justify-center align-middle md:px-10 px-4 pt-6 md:pt-0 bg-slate-300'}>
                    <Typography className='text-4xl font-serif'>Hey, its Subham here.</Typography>
                    <Typography className='font-serif pt-3'>Hello everyone. A very warm welcome to all of you! It is lovely to have you here!Hello everyone. A very warm welcome to all of you! It is lovely to have you here!</Typography>
                </Card>
            </Paper>
        </Box>
    )
}

export default About