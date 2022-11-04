import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProjectCard from './ProjectCard';
import { Card } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';


function Project(props) {

    const [toggleDisplay, setToggleDisplay] = useState(true);

    const handleChangeOne = () => {
        setToggleDisplay(true);
    };
    const handleChangeTwo = () => {
        setToggleDisplay(false);
    };

    return (
        <Box id="project" className={props.toggleMode ? 'bg-gray-800' : ''} sx={{ height: "140vh" }}>
            <Box className='bg-yellow-300 rounded-r-full flex items-center align-middle' sx={{ height: "140vh" }}>
                <Box className='md:mx-20 mx-4'>
                    <Box className='bg-transparent text-white w-full'>
                        <Box className='flex justify-evenly py-4' sx={{
                            backdropFilter: "blur(2rem)", backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)",
                            border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem"
                        }}>
                            <Typography className={toggleDisplay ? "text-white md:text-lg text-sm font-serif uppercase" : "text-gray-400 md:text-lg text-sm font-serif uppercase"} onClick={handleChangeOne}>
                                Personal Project</Typography>
                            <Typography className={!toggleDisplay ? "text-white md:text-lg text-sm font-serif uppercase" : "text-gray-400 md:text-lg text-sm font-serif uppercase"} onClick={handleChangeTwo}>
                                Freelance Project</Typography>
                        </Box>
                    </Box>
                    <Box className=''>
                        <AnimatePresence mode="wait" >
                            {toggleDisplay ? (
                                <Box className='grid xl:grid-cols-3 md:grid-cols-2 xl:space-x-4 md:mt-10 mt-4'
                                // component={motion.div}
                                // initial={{ opacity: 0, x: -100 }}
                                // animate={{ opacity: 1, x: 0 }}
                                // transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <Card className='shadow-xl' sx={{
                                        backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)"
                                    }}>
                                        <ProjectCard projectImg={require("../../Assets/placement-helper.jpg")}
                                            name={"Placement Helper"} des={"It is a College Alumni Project which I can build from scratch. The purpose of this site is for the alumni of our college she/he post their company or other company jobs/internships-related posts. So, it will help our college juniors to apply for job or internship roles. "}
                                            techStack={"Tech Stack used: MERN STACK, Tailwind CSS, Git Github, Restful API, DotENV and MongoDB Atlas."}
                                            host={"https://placement-helper.netlify.app/"} />
                                    </Card>
                                    <Card className='shadow-xl md:ml-5 mt-5 md:mt-0' sx={{
                                        backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)"
                                    }}>
                                        <ProjectCard projectImg={require("../../Assets/QR_code_gen.png")}
                                            name={"Chrome Extension"} des={"It is a chrome extension project. The extension is used to convert the current tab URL to a QR Code."}
                                            techStack={"Tech Stack used: React JS, Tailwind CSS, JSON."}
                                            github={"https://github.com/SubhamB2003/Tab_Url_QR_Code_Generator"} />
                                    </Card>
                                    <Card className='shadow-xl mt-5 xl:mt-0' sx={{
                                        backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)"
                                    }}>
                                        <ProjectCard projectImg={require("../../Assets/portfolio-img.jpg")}
                                            name={"Portfolio"} des={"It is my professional portfolio website."}
                                            techStack={"Tech Stack used: React JS, Tailwind CSS, MUI."}
                                            host={"https://my-portfolio-site07.netlify.app/."} />
                                    </Card>
                                </Box>
                            ) : (
                                <Box className='grid md:grid-cols-2 gap-0 xl:gap-60 xl:mx-20 space-y-2 md:space-y-0 md:space-x-4 mt-10'
                                    component={motion.div}
                                    initial={{ opacity: 0, x: +200 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <Card className='shadow-xl' sx={{
                                        backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)"
                                    }}>
                                        <ProjectCard projectImg={require("../../Assets/Cycology.png")}
                                            name={"Cycology India"} des={"Building the website from Scratch.It was a team project So, mainly I was working on the front- end part specifically Data fetching, Authentication, Responsiveness, etc."}
                                            techStack={"Tech Stack used: React Js, Tailwind CSS, Bootstrap, Restful API."} host={"http://www.cyclologyindia.com/"} />
                                    </Card>
                                    <Card className=' shadow-xl' sx={{
                                        backgroundImage: "linear-gradient(to right, #7600bc, #7a00cc, #7d00dd, #7f00ee, #8000ff)"
                                    }}>
                                        <ProjectCard projectImg={require("../../Assets/Cycology.png")}
                                            name={"Nile India"} des={"Building E-Commerce(Construction materials) website from scratch. User Authentication. PayTM API. Teamwork, Problem Solving."}
                                            techStack={"Tech Stack used: React Js, React-Bootstrap, Restful API."} host={"Not be yet"} />
                                    </Card>
                                </Box>
                            )}
                        </AnimatePresence>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default Project