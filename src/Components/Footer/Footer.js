import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Style.css'
import Feedback from '../Feedback/Feedback';

function Footer(props) {
    return (
        <Box className={props.toggleMode ? 'bg-black' : ''}>
            <Box className='container relative flex-col bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 w-full rounded-tr-3xl rounded-tl-full' sx={{ height: "80vh" }}>
                <Box className='relative'>
                    <Box className='grid md:grid-cols-2 px-10 md:py-6 md:mx-20 my-auto' sx={{ height: "70vh" }}>
                        <Feedback />
                        <Box className='relative w-40 md:w-72 mx-auto'>
                            <img className='absolute mx-auto md:mt-8' src={require('../../Assets/contact-us-concept-illustration_114360-3146.png')} alt="" />
                        </Box>
                    </Box>
                    <Divider className='hidden md:block' />
                    <Box className='h-52 xl:h-0 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
                        <Box className='md:mx-20 px-10 flex justify-between'>
                            <Box className='z-50'>
                                <Typography className='text-black md:text-2xl text-base font-lobster text-left mt-40 md:mt-5'>Itz_subham</Typography>
                            </Box>
                            <Box className='flex float-right right-0 md:space-x-8 space-x-5 mt-40 md:mt-5 z-50'>
                                <GitHubIcon className='fill-black cursor-pointer hover:fill-black' />
                                <FacebookIcon className='fill-black cursor-pointer hover:fill-blue-600' />
                                <InstagramIcon className='fill-black cursor-pointer hover:fill-pink-800' />
                                <TwitterIcon className='fill-black cursor-pointer hover:fill-cyan-500' />
                            </Box>
                        </Box>
                    </Box>
                    <Box className='absolute w-full bottom-20'>
                        <svg className="absolute  waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                            </g>
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer