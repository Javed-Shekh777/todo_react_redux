import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DeleteContext } from './context/contextProvider';
import Alert from 'react-bootstrap/Alert';

function Navbar() {
  const { dltask, setDltask } = React.useContext(DeleteContext);

  if (dltask) {
    setTimeout(() => {
      if (dltask) {
        setDltask(false);
      }
    }, 3000);
  }


  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#232f3e" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', textAlign: 'center' }}>
              Redux To-Do App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {
        dltask && <Alert variant="danger" >
          Task Deleted Successfully !!  🥰🥰
        </Alert>
      }
    </>
  );
}


export default Navbar;