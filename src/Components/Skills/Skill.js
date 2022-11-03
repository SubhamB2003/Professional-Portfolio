import React from 'react';
import Box from '@mui/material/Box';
import { Card, LinearProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import './style.css'


function Skill(props) {

    return (
        <Box id="skill" className={props.toggleMode ? 'bg-black compHeight' : 'compHeight'}>
            <Box className=' rounded-full bg-violet-600 compHeight'>
                <Typography className='text-center md:text-7xl text-4xl font-lobster text-yellow-300 py-4'>Tech Stack Know</Typography>
                <Box className='grid md:grid-cols-3 md:mx-20 md:mb-10 md:space-x-10 space-y-6 mx-10' sx={{ height: "90vh" }}>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto md:ml-10 md:mt-6'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/Mern.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-5'>Mern Stack</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={70} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-28 w-20 rounded-full' src={require("../../Assets/Metarial_UI.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-10'>MUI</Typography>
                                <LinearProgress className='md:mt-5 mt-4' variant="determinate" value={60} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/Tailwind_Icon.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-3'>Tailwind Css</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={80} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/Bootstrap_Icon.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-8'>Bootstrap</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={80} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/typescript.webp")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-4'>Typescript</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={40} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/javascript_icon.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-4'>JavaScript</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={80} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/c_icon.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-3'>C</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={70} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-28 w-20 rounded-full' src={require("../../Assets/java_icon.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-4'>Java</Typography>
                                <LinearProgress className='md:mt-4 mt-4' variant="determinate" value={70} />
                            </Box>
                        </Stack>
                    </Card>
                    <Card className='shadow-xl shadow-slate-800 h-36 md:h-auto'>
                        <Stack className='p-4'>
                            <img className='mx-auto md:w-24 w-16 rounded-full' src={require("../../Assets/git_github.png")} alt="" />
                            <Box className=''>
                                <Typography className='text-center text-xl font-serif font-semibold md:mt-6'>Git Github</Typography>
                                <LinearProgress className='md:mt-6 mt-4' variant="determinate" value={50} />
                            </Box>
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}


export default Skill