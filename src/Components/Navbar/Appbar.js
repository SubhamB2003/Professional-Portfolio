import React from 'react';
import { Avatar, Typography, IconButton, Tooltip, List, Drawer } from '@mui/material';
import { Box } from '@mui/system';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';


function Appbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawerWidth = 320;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backdropFilter: "blur(2rem)", height: "100vh" }}>
            <List>
                <Box className="mt-28">
                    <a href="#about">
                        <Typography className='text-xl mt-10 font-bold font-serif'>About</Typography>
                    </a>
                    <a href="#about">
                        <Typography className='text-xl mt-10 font-bold font-serif'>Skills</Typography>
                    </a>
                    <a href="#about">
                        <Typography className='text-xl mt-10 font-bold font-serif'>Projects</Typography>
                    </a>
                    {props.toggleMode ? <LightModeIcon className='text-xl mt-10 font-bold w-10 h-10' onClick={props.toggleModeHandler} /> : <DarkModeIcon className='text-xl mt-10 font-bold w-10 h-10' onClick={props.toggleModeHandler} />}
                </Box>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box className="flex justify-between bg-transparent py-6 md:px-16 px-2" sx={{ width: "100%", position: "fixed", zIndex: "99999999" }}>
                <Box className={!props.toggleMode ? "flex items-center md:px-6 px-4 py-2 absolute text-white bg-black" :
                    "flex items-center md:px-6 px-4 py-2 text-white absolute"} sx={{
                        backdropFilter: "blur(2rem)", border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem"
                    }}
                >
                    <a href="#top" className='flex items-center'>
                        <Tooltip title="its me">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={require('../../Assets/Logo.jpg')} className="w-12 h-12" />
                            </IconButton>
                        </Tooltip>
                        <Typography
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                            className="pl-2 md:text-xl text-base font-bold font-serif"
                        >
                            Subham Bhattacharjee
                        </Typography>
                    </a>
                </Box>

                <Box className={!props.toggleMode ? "md:px-12 pl-4 md:py-4 py-3 md:right-16 right-1 absolute text-white bg-black" :
                    "md:px-12 pl-4 md:py-4 py-3 md:right-16 right-1 text-white absolute"} sx={{
                        backdropFilter: "blur(2rem)", border: "1px solid hsla(0,0%,100%,.1)", borderRadius: "1.6rem"
                    }}>
                    <Box className="sm:block hidden">
                        <Box className="flex items-center space-x-6">
                            <a href="#about">
                                <Typography className='text-lg font-bold font-serif hover:underline hover:decoration-yellow-400'>About</Typography>
                            </a>
                            <a href="#skill">
                                <Typography className='text-lg font-bold font-serif hover:underline hover:decoration-yellow-400'>Skills</Typography>
                            </a>
                            <a href="#project">
                                <Typography className='text-lg font-bold font-serif hover:underline hover:decoration-yellow-400'>Projects</Typography>
                            </a>
                            {props.toggleMode ? <LightModeIcon onClick={props.toggleModeHandler} /> : <DarkModeIcon onClick={props.toggleModeHandler} />}
                        </Box>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default Appbar