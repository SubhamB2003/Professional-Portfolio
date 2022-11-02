import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

// import './Style.css'

function Footer() {
    return (
        <Box className='container flex-col bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 w-full rounded-t-3xl' sx={{ height: "80vh" }}>
            <Box className=''>
                <Box className='grid md:grid-cols-2 px-10 md:py-6 md:mx-20 my-auto' sx={{ height: "70vh" }}>
                    <Box className='flex flex-col justify-center bg-white md:p-10 px-8 py-4 my-auto rounded-tl-3xl rounded-br-3xl'>
                        <Box className=''>
                            <Box className='grid md:grid-cols-2'>
                                <TextField className="mr-6" id="standard-basic" label="Name" variant="standard" />
                                <TextField id="standard-basic" label="Email" variant="standard" />
                            </Box>
                            <TextField className='mt-5 h-6' id="standard-basic" fullWidth label="Message" variant="standard" />
                        </Box>
                        <Box className='mx-auto mt-5'>
                            <Button className='md:w-64 w-40 md:h-12 h-10 mt-5 shadow-lg shadow-white bg-black text-white font-serif font-semibold hover:bg-gray-800'>
                                <SendIcon className='mr-4' />Send</Button>
                        </Box>
                    </Box>
                    <Box className='relative w-40 md:w-72 mx-auto'>
                        <img className='absolute mx-auto md:mt-8' src={require('../../Assets/contact-us-concept-illustration_114360-3146.png')} alt="" />
                    </Box>
                </Box>
                <Divider className='hidden md:block' />
                <Box className='md:mx-20 flex justify-between px-10 h-52 xl:h-0 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
                    <Typography className='text-white md:text-2xl text-base font-lobster text-left mt-40 md:mt-5'>Itz_subham</Typography>
                    <Box className='flex float-right right-0 space-x-5 mt-40 md:mt-5'>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GitHubIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer