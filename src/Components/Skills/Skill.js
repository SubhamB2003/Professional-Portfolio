import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './style.css'
import SkillCard from './SkillCard';
import { Typography } from '@mui/material';


function Skill(props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Box id="skill" className={props.toggleMode ? 'bg-gray-800' : ''}>
            <Box className={props.toggleMode ? 'bg-violet-800 h-100 rounded-l-full' : 'bg-violet-500 h-100 rounded-l-full'}>
                <Typography className='md:text-6xl text-2xl font-lobster text-center font-bold text-yellow-400 md:pt-12 pt-12'>Tech Stack Know</Typography>
                <Box className='shadow-lg shadow-zinc-700 bg-transparent rounded-3xl p-4 xl:mx-20 xl:top-36 border border-black xl:mt-32 md:mt-80 mt-24'
                    sx={{ height: "25rem" }}>
                    {/* <Typography className='text-center px-4 text-white font-serif pt-1'>You can now view professional-portfolio in the browser.</Typography> */}
                    {/*  infinite={true}  */}
                    <Carousel responsive={responsive} className="md:mx-10 mt-16 ">
                        <Box>
                            <SkillCard image={require("../../Assets/Mern.png")} Title={"Mern Stack"} data={60} bg_color={"bg-green-400"} text_color={"text-white"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/Metarial_UI.png")} Title={"MUI"} data={70} bg_color={"bg-blue-800"} text_color={"text-white"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/Tailwind_Icon.png")} Title={"Tailwind Css"} data={80} bg_color={"bg-white"} text_color={"text-blue-800"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/Bootstrap_Icon.png")} Title={"Bootstrap"} data={80} bg_color={"bg-violet-600"} text_color={"text-white"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/typescript.webp")} Title={"Typescript"} data={40} bg_color={"bg-gray-700"} text_color={"text-white"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/javascript_icon.png")} Title={"Javascript"} data={80} bg_color={"bg-yellow-300"} text_color={"text-white"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/c_icon.png")} Title={"C"} data={70} bg_color={"bg-white"} text_color={"text-black"} />
                        </Box>
                        <Box>
                            <SkillCard image={require("../../Assets/java_icon.png")} Title={"Java"} data={70} bg_color={"bg-purple-300"} text_color={"text-white"} />
                        </Box>
                        <Box className='pr-10'>
                            <SkillCard image={require("../../Assets/git_github.png")} Title={"Git Github"} data={60} bg_color={"bg-orange-400"} text_color={"text-white"} />
                        </Box>
                    </Carousel>
                </Box>
            </Box>
        </Box>
    )
}


export default Skill