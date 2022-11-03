import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function Feedback() {
    return (
        <Box className='shadow-xl shadow-gray-700 flex flex-col justify-center bg-transparent md:p-10 px-8 py-4 my-auto rounded-tl-3xl rounded-br-3xl'>
            <Box className=''>
                <Box className='grid md:grid-cols-2'>
                    <TextField className="mr-6 text-red-700" id="standard-basic1" label="Name" variant="standard" />
                    <TextField id="standard-basic2" label="Email" variant="standard" />
                </Box>
                <TextField className='mt-5 h-6' id="standard-basic3" fullWidth label="Message" variant="standard" />
            </Box>
            <Box className='mx-auto mt-5'>
                <Button className='md:w-64 w-40 md:h-12 h-10 mt-5 shadow shadow-white bg-black text-white font-serif font-semibold hover:bg-gray-800'>
                    <SendIcon className='mr-4' />Send</Button>
            </Box>
        </Box>
    )
}

export default Feedback