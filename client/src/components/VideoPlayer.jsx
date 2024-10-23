import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  video: {
    height: "250px",
    width: "450px",
    // backgroundColor:'red'
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  gridContainer: {
    display: "flex",
    gap: "15px",
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
    height: "270px",
    width: "450px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid className={classes.gridContainer}>
      {stream && ( //if ma stream ka logic hata data hu to object src wala error nahi ata
        <Paper className={classes.paper}>
          <Typography>{name || "Name"}</Typography>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.video}
          />
        </Paper>
      )}

      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Typography>{call.name || "Name"}</Typography>
          <video
            playsInline
            // muted
            ref={userVideo}
            autoPlay
            className={classes.video}
          />
        </Paper>
      )}
    </Grid>
  );
};
export default VideoPlayer;
