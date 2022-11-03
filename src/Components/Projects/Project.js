import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProjectCard from './ProjectCard';
import { Card } from '@mui/material';


function Project(props) {

    const [toggleDisplay, setToggleDisplay] = useState(true);

    const handleChangeOne = () => {
        setToggleDisplay(true);
    };
    const handleChangeTwo = () => {
        setToggleDisplay(false);
    };

    return (
        <Box id="project" className={props.toggleMode ? 'bg-black' : 'bg-yellow-300 rounded-full'} sx={{ height: "130vh" }}>
            <Box className='md:mx-20 bg-yellow-300 rounded-full' sx={{ height: "130vh" }}>
                <Box className='bg-transparent text-white'>
                    <Box className='flex justify-evenly py-4' sx={{
                        backdropFilter: "blur(2rem)", border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem"
                    }}>
                        <Typography className={toggleDisplay ? "text-white md:text-lg text-sm font-serif uppercase" : "text-gray-400 md:text-lg text-sm font-serif uppercase"} onClick={handleChangeOne}>
                            Personal Project</Typography>
                        <Typography className={!toggleDisplay ? "text-white md:text-lg text-sm font-serif uppercase" : "text-gray-400 md:text-lg text-sm font-serif uppercase"} onClick={handleChangeTwo}>
                            Freelance Project</Typography>
                    </Box>
                </Box>
                <Box className=''>
                    {toggleDisplay ? (
                        <Box className='grid md:grid-cols-3 space-y-2 md:space-y-0 md:space-x-4 md:mt-10 mt-4'>
                            <Card className='shadow-xl'>
                                <ProjectCard projectImg={require("../../Assets/placement-helper.jpg")}
                                    name={"Placement Helper"} des={"It is a College Alumni Project which I can build from scratch. The purpose of this site is for the alumni of our college she/he post their company or other company jobs/internships-related posts. So, it will help our college juniors to apply for job or internship roles. "}
                                    techStack={"Tech Stack used: MERN STACK, Tailwind CSS, Git Github, Restful API, DotENV and MongoDB Atlas."}
                                    host={"https://placement-helper.netlify.app/"} />
                            </Card>
                            <Card className='shadow-xl'>
                                <ProjectCard projectImg={require("../../Assets/QR_code_gen.png")}
                                    name={"Chrome Extension"} des={"It is a chrome extension project. The extension is used to convert the current tab URL to a QR Code."}
                                    techStack={"Tech Stack used: React JS, Tailwind CSS, JSON."}
                                    github={"https://github.com/SubhamB2003/Tab_Url_QR_Code_Generator"} />
                            </Card>
                            <Card className='shadow-xl'>
                                <ProjectCard projectImg={require("../../Assets/portfolio-img.jpg")}
                                    name={"Portfolio"} des={"It is my professional portfolio website."}
                                    techStack={"Tech Stack used: React JS, Tailwind CSS, MUI."}
                                    host={"https://my-portfolio-site07.netlify.app/."} />
                            </Card>
                        </Box>
                    ) : (
                        <Box className='grid md:flex justify-evenly space-y-2 md:space-y-0 md:space-x-4 mt-10'>
                            <Card className='md:w-96 shadow-xl'>
                                <ProjectCard projectImg={require("../../Assets/Cycology.png")}
                                    name={"Cycology India"} des={"Building the website from Scratch.It was a team project So, mainly I was working on the front- end part specifically Data fetching, Authentication, Responsiveness, etc."}
                                    techStack={"Tech Stack used: React Js, Tailwind CSS, Bootstrap, Restful API."} host={"http://www.cyclologyindia.com/"} />
                            </Card>
                            <Card className='md:w-96 shadow-xl'>
                                <ProjectCard projectImg={require("../../Assets/Cycology.png")}
                                    name={"Nile India"} des={"Building E-Commerce(Construction materials) website from scratch. User Authentication. PayTM API. Teamwork, Problem Solving."}
                                    techStack={"Tech Stack used: React Js, React-Bootstrap, Restful API."} host={"Not be yet"} />
                            </Card>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}


export default Project