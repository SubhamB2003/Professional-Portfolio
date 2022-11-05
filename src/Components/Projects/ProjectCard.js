import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ProjectCard({ name, des, techStack, host, github, projectImg }) {
    return (
        <Stack spacing={1} className="md:p-10 p-4">
            <Box className='bg-transparent'>
                <img className='md:w-auto md:h-40 w-40 mx-auto' src={projectImg} alt="" />
            </Box>
            <Typography className='md:text-2xl text-sm text-center font-serif text-gray-200'>{name}</Typography>
            <Typography className='md:text-base text-xs font-serif text-gray-200'>{des}</Typography>
            <Typography className='md:text-base text-xs font-serif text-gray-200'>{techStack}</Typography>
            <Typography className='md:text-base text-xs font-serif text-gray-200'>{github && <a href={github} target="_blank" rel="noreferrer">Github: Link</a>}</Typography>
            <Typography className='md:text-base text-xs font-serif flex-wrap text-gray-200'>{host && <a href={host} target="_blank" rel="noreferrer">Hosted: {host}</a>}</Typography>
        </Stack>
    )
}

export default ProjectCard