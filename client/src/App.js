import { AppBar, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';

import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Operations from './components/Operations'
import Notificatioin from './components/Notificatioin'



const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',
    // backgroundColor:'black'
    // [theme.breakpoints.down('xs')]: {
    //   width: '90%',
    // },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    // backgroundColor:'red'
  },
}));
function App() {

  const classes = useStyles();
  return (
 <div className={classes.wrapper}>
  <AppBar className={classes.appBar} position='static' color='inherit'>
    <Typography variant='h2' align='center'>Vido chat</Typography>
  </AppBar>
<VideoPlayer />
<Operations>
  <Notificatioin />
</Operations>
  
</div> 
  )
}

export default App