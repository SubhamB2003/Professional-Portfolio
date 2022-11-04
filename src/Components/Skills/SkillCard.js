import { Box, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

import './style.css'

function SkillCard({ image, Title, data, bg_color, text_color }) {
    return (
        <Stack className={`img-pics border border-black rounded-xl ${bg_color}`}>
            <img className='w-32 h-32 mx-auto rounded-full' src={image} alt="" />
            <Box className=''>
                <Typography className={`text-center xl:text-xl text-base font-serif font-semibold ${text_color}`}>{Title}</Typography>
                <LinearProgress className='' variant="determinate" value={data} />
            </Box>
        </Stack>
    )
}

export default SkillCard