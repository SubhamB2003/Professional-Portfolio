import { Box, Card, Typography } from '@mui/material'
import React from 'react'

function Skill() {
    return (
        <Box className='flex items-center justify-center' sx={{ height: "100vh" }}>
            <Box>
                <Typography className='text-6xl font-semibold'>TeckStack I Known</Typography>
            </Box>
            <Box>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Box>
        </Box>
    )
}

export default Skill