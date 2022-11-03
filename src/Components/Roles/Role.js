import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './style.css';


function Role(props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Box className={props.toggleMode ? 'bg-gradient-to-b from-black via-purple-900 to-slate-900' : 'bg-gradient-to-b from-black via-slate-400 to-gray-100'} sx={{ width: "100%", height: "60vh" }}>
            <Card className={props.toggleMode ? 'absolute shadow-lg shadow-indigo-500 md:left-10 md:right-10 left-0 right-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 rounded-full p-4' :
                'bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 shadow-xl shadow-indigo-400 absolute md:left-10 md:right-10 left-0 right-0 rounded-full p-4'}
                sx={{ top: "40rem", height: "25rem" }}>
                <Typography className='md:text-6xl text-2xl font-lobster text-center font-bold text-yellow-400 md:mt-4 mt-12'>Interested Field</Typography>
                <Typography className='text-center px-4 text-white font-serif pt-1'>You can now view professional-portfolio in the browser.</Typography>
                <Carousel responsive={responsive} infinite={true} className="md:mx-10">
                    <Box className="mx-10">
                        <img className='md:w-56 w-40 mx-auto' src={require("../../Assets/fullStack_Dev_pic.png")} alt="Web Development" />
                        <Typography className='text-center text-lg text-white font-serif'>Web Development</Typography>
                    </Box>
                    <Box className="mx-10">
                        <img className='md:w-56 w-40 mt-4 mx-auto' src={require("../../Assets/app_Dev_pic.png")} alt="Android Development" />
                        <Typography className='text-center text-lg text-white font-serif mt-5'>Android Development</Typography>
                    </Box>
                    <Box className="mx-10">
                        <img className='md:w-60 w-44 mt-8 mx-auto' src={require("../../Assets/devOps_Dev_pic2.png")} alt="DevOps" />
                        <Typography className='text-center text-lg text-white font-serif mt-6'>DevOps</Typography>
                    </Box>
                    <Box className="mx-10">
                        <img className='md:w-72 w-60 mt-2 mx-auto' src={require("../../Assets/cloud_Dev_pic.png")} alt="Cloud" />
                        <Typography className='text-center text-lg text-white font-serif mt-3'>Cloud</Typography>
                    </Box>
                </Carousel>
            </Card>
        </Box>
    )
}

export default Role