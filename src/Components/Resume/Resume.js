import { Box, Button, Card, Typography } from '@mui/material';
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
            y: [-20, 20],
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
            <Box className='section grid md:grid-cols-2 md:p-10 p-4'>
                <Card className='flex justify-center align-middle bg-transparent' component={motion.div}
                    variants={loaderVarinats1}
                    initial="initial"
                    animate="animation">
                    <img className='h-80 md:h-auto' src={require("../../Assets/resume-img.png")} alt="My_Pic" />
                </Card>

                <Card className='flex flex-col bg-transparent' component={motion.div}
                    variants={loaderVarinats2}
                    initial="initial"
                    animate="animation">
                    <Box className='absolute md:ml-24 ml-4'>
                        <Box className='img-over'>
                            <img className='w-28 md:w-44 md:mt-16 mt-auto' src={require("../../Assets/resume-sec-top.png")} alt="My_Pic" />
                            <Box className='overlay md:py-6 py-2 md:px-8 text-center'>
                                <Typography className='text-black font-semibold font-serif text-xs md:text-base'>Hey,</Typography>
                                <Typography className='text-black font-semibold font-serif text-xs md:text-base'>Wanna check </Typography>
                                <Typography className='text-black font-semibold font-serif text-xs md:text-base'>my resume</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='mx-auto md:my-auto'>
                        <motion.img drag={true} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className='w-80 md:w-96' src={require("../../Assets/resume-sec.png")} alt="My_Pic" />
                        <Box className='ml-8 md:ml-14'>
                            <a href={ResumeFile} download="Resume.pdf">
                                <Button className={props.toggleMode ? 'w-64 h-12 shadow-lg shadow-white bg-black text-white font-serif font-semibold hover:bg-gray-800'
                                    : 'w-64 h-12 bg-white shadow-lg shadow-white text-black font-serif font-semibold hover:bg-gray-300 '}>
                                    <DownloadIcon className='mr-4' />Download Resume</Button>
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default Resume