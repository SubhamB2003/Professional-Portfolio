import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ResumeFile from '../../Assets/Subham Resume.pdf';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion'

import './style.css';


function Resume(props) {

    const loaderVarinats1 = {
        initial: {
            opacity: 0,
        },
        animation: {
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    const loaderVarinats2 = {
        initial: {
            opacity: 0,
        },
        animation: {
            opacity: 1,
            y: [-20, 0],
            x: 0,
            transition: {
                // y: {
                //     yoyo: Infinity,
                //     delay: 2,
                //     duration: 2,
                // },
                duration: 2
            }
        }
    }

    return (
        <Box className='containerBox'>
            <Box className='section grid xl:grid-cols-2 md:p-10 p-4'>
                <Box className='flex justify-center align-middle bg-transparent' component={motion.div}
                    variants={loaderVarinats1}
                    initial="initial"
                    animate="animation">
                    <img className='bg-img-height' src={require("../../Assets/resume-img.png")} alt="Resume_pic" />
                </Box>

                <Box className='flex flex-col bg-transparent' component={motion.div}
                    variants={loaderVarinats2}
                    initial="initial"
                    animate="animation">
                    <Box className='absolute md:ml-24'>
                        <Box className='img-over'>
                            <img className='img_size xl:mt-16 mt-auto' src={require("../../Assets/resume-sec-top.png")} alt="Cloud_img" />
                            <Box className='overlay xl:py-6 py-2 xl:px-8 md:px-3 text-center'>
                                <Typography className='text-black font-semibold font-serif text_size'>Hey,</Typography>
                                <Typography className='text-black font-semibold font-serif text_size'>Wanna check </Typography>
                                <Typography className='text-black font-semibold font-serif text_size'>my resume</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='mx-auto md:my-auto'>
                        <motion.img drag={true} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className='w-80 xl:w-96 md:w-60'
                            src={require("../../Assets/Vector_Robot_3.png")} alt="Robot_vector" />
                        <Box className='ml-8 md:ml-14'>
                            <a href={ResumeFile} download="Resume.pdf">
                                <Button className={props.toggleMode ? 'lg:w-64 text-sm h-12 shadow-lg shadow-white bg-black text-white font-serif hover:bg-gray-800'
                                    : 'lg:w-64 h-12 text-sm bg-white shadow-lg shadow-white text-black font-serif hover:bg-gray-300 '}>
                                    <DownloadIcon className='mr-4' />Download Resume</Button>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Resume