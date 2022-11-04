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
        <Box className={props.toggleMode ? 'bg-gray-800' : ''}>
            <Box className='relative flex-col bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-tr-3xl rounded-tl-full' sx={{ height: "80vh", width: "100%" }}>
                <Box className='relative'>
                    <Box className='grid xl:grid-cols-2 md:px-10 px-5 md:py-6 md:mx-20 my-auto' sx={{ height: "70vh" }}>
                        <Feedback />
                        <Box className='relative connect-pic mx-auto'>
                            <img className='' src={require('../../Assets/contact-us.png')} alt="" />
                        </Box>
                    </Box>
                    <Divider className='hidden md:block' />
                    <Box className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
                        <Box className='md:mx-20 md:px-10 px-5 flex justify-between'>
                            <Box className='z-50'>
                                <Typography className='text-black md:text-2xl text-base font-lobster text-left my-10 md:mt-40 xl:mt-5'>Itz_subham</Typography>
                            </Box>
                            <Box className='flex float-right right-0 md:space-x-8 space-x-3 my-10 md:mt-40 xl:mt-5 z-50'>
                                <a href='https://github.com/SubhamB2003' target="_blank" rel="noreferrer"><GitHubIcon className='fill-black cursor-pointer hover:fill-black' /></a>
                                <a href='https://www.facebook.com/subham.bhattachariya.9' target="_blank" rel="noreferrer"><FacebookIcon className='fill-black cursor-pointer hover:fill-blue-600' /></a>
                                <a href='https://www.instagram.com/itz_subham07/' target="_blank" rel="noreferrer"><InstagramIcon className='fill-black cursor-pointer hover:fill-pink-800' /></a>
                                <a href='https://twitter.com/SubhamB82338312' target="_blank" rel="noreferrer"><TwitterIcon className='fill-black cursor-pointer hover:fill-cyan-500' /></a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='absolute w-full xl:bottom-36 bottom-20'>
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