import { Box, Card, Typography } from '@mui/material';
import React from 'react';

import './style.css';

function Skill() {
    return (
        <Box id="skill" className='contain' sx={{ height: "100vh" }}>
            <Box className='sec flex items-center justify-center'>
                <Typography className='text-6xl font-semibold'>TeckStack I Known</Typography>
                <Box className='absolute flex justify-evenly w-full'>
                    <Card className='w-52 h-64 bg-green-400 mt-14'>
                        hello
                    </Card>
                    <Card className='w-52 h-64 bg-green-400'></Card>
                    <Card className='w-52 h-64 bg-green-400 mt-28'></Card>
                </Box>
            </Box>
        </Box>
    )
}

export default Skill