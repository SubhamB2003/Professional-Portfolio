import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';


import Header from './Components/Header/Header';
import Role from './Components/Roles/Role';
import Appbar from './Components/Navbar/Appbar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Skill from './Components/Skills/Skill';



function App(props) {

  const [toggleMode, setToggleMode] = useState(false);

  const toggleModeHandler = () => {
    setToggleMode(!toggleMode);
  }

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: toggleMode ? 'dark' : 'light',
      },
    }),
    [toggleMode],
  );


  return (
    <ThemeProvider theme={theme}>
      <Appbar toggleMode={toggleMode} toggleModeHandler={toggleModeHandler} />
      <span id="back-to-top-anchor" />
      <Header toggleMode={toggleMode} />
      <Role toggleMode={toggleMode} />
      <About toggleMode={toggleMode} />
      <Resume toggleMode={toggleMode} />
      <Skill />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  )
}


function ScrollTop(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default App