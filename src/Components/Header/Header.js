/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TrackVisibility from 'react-on-screen';

import { motion } from 'framer-motion'

import './style.css';

function Header(props) {

    const toRotate = ["<h1>Web Developer</h1>", "<h1>Frontend Developer</h1>", "<h1>Backend Developer</h1>"];
    const [loopNum, setLoopNum] = useState(0);
    const [curText, setCurText] = useState("");
    const [isDeleteing, setIsDeleteing] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const [choose, setChoose] = useState(300 - Math.random() * 100);
    const period = 2000;

    const loaderVarinats = {
        initial: {
            scale: 0,
        },
        animation: {
            scale: 1,
            y: [-0, 40],
            x: 0,
            transition: {
                y: {
                    yoyo: Infinity,
                    delay: 2,
                    duration: 2,
                },
                duration: 2
            }
        }
    }

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleteing ? fullText.substring(0, curText.length - 1) : fullText.substring(0, curText.length + 1);

        setCurText(updatedText);

        if (isDeleteing) {
            setChoose(prevDelta => prevDelta / 2);
        }

        if (!isDeleteing && updatedText === fullText) {
            setIsDeleteing(true);
            setIndex(prevIndex => prevIndex - 1);
            setChoose(period);
        } else if (isDeleteing && updatedText === '') {
            setIsDeleteing(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setChoose(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, choose);

        return () => { clearInterval(ticker) };
    }, [curText])


    return (
        <Box className="Header-img text-white">
            <Box className='grid md:grid-cols-2 justify-between space-y-4 md:pt-28 pt-8'>
                <Box className="md:pl-20 pl-6 pt-32 text-center banner">
                    <Typography className="md:text-3xl text-xl font-serif">{"<h3>Welcome to my Portfolio</h3>"}</Typography>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <Typography className='md:text-6xl text-3xl font-serif pt-4 pb-4'>{`Hi! I'm a `} <span className='txt-rotate' ><span className="text-amber-400 wrap">{curText}</span></span></Typography>
                                {/* <Typography className='md:text-4xl text-2xl font-serif'>{"<h2>Hi! I'm Subham Bhattacharjee</h2>"}</Typography> */}
                            </div>}
                    </TrackVisibility>
                </Box>

                <Box className='md:pl-48 pl-16'
                    component={motion.div}
                    variants={loaderVarinats}
                    initial="initial"
                    animate="animation">
                    <img src={require("../../Assets/my-pic.png")} alt="" className='rounded-lg shadow-2xl md:w-80 w-60 shadow-black' />
                </Box>
            </Box>
        </Box >
    )
}


export default Header