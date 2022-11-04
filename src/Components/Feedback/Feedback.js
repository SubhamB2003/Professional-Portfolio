import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';


function Feedback() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // const Data = { name, email, message };
        if (name !== '' && email !== '' && message !== '') {
            emailjs.sendForm('service_35t09et',
                'template_oz0blta',
                e.target,
                'user_ne1wvrwUw7RlLbCObv0tF').then((res) => {
                    console.log(res);
                    setEmail('')
                    setName('')
                    setMessage('')
                    window.alert('Thank you for your feedback');
                })
        }
        else {
            window.alert('Please Fill the form');
        }
    }

    return (
        <Box className='shadow-xl shadow-gray-700 flex flex-col justify-center bg-transparent md:p-10 px-8 py-4 my-auto rounded-tl-3xl rounded-br-3xl'>
            <form onSubmit={handleSubmit}>
                <Box className=''>
                    <Box className='grid md:grid-cols-2'>
                        <TextField className="mr-6 text-red-700" id="standard-basic1" required label="Name" variant="standard" onChange={(e) => setName(e.target.value)} value={name} />
                        <TextField id="standard-basic2" label="Email" variant="standard" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Box>
                    <TextField className='mt-5 h-6' id="standard-basic3" required fullWidth label="Message" variant="standard" onChange={(e) => setMessage(e.target.value)} value={message} />
                </Box>
                <Box className='mx-auto mt-5'>
                    <Button type="submit" className='md:w-64 w-40 md:h-12 h-10 mt-5 shadow shadow-white bg-black text-white font-serif font-semibold hover:bg-gray-800'>
                        <SendIcon className='mr-4' />Send</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Feedback