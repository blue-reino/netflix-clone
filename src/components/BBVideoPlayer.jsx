import React, { useState, useRef, useEffect } from 'react';
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
  initial: { 
    opacity: 0,
    x: "100%", // Start off the screen to the right
  },
  animate: {
    opacity: 1,
    x: -50, 
    transition: {
      duration: 0.5, 
      ease: 'easeInOut', 
    },
  },
};


const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    const handleEnded = () => {
      const video = videoRef.current;
      setEnded(true);
      video.pause(); // Pause the video when it ends
    };
    
    const handlePause = () => {
      const video = videoRef.current;
      video.currentTime = 0; // Go back to the start when video pauses
      video.pause(); // Ensure the video stays paused
    };
    
  
    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
  
    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
    };
  }, []);
  

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setEnded(false);
    }
  };

  return (
    <div className="video-player" style={{ position: 'relative' }}>
      <video ref={videoRef} src={src} muted={muted} autoPlay={true} controls={false} style={{ width: '100%' }} />
      <motion.button style={{ position: 'relative', top: '-300px', left: '90%', transform: 'translate(-50%, -50%)'}} onClick={ended ? restartVideo : toggleMute} variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      viewport={{once: true}}>
        {ended ? 
        <i className="ri-restart-line"></i> : (muted ? 
        <i className="ri-volume-mute-line"></i> : 
        <i className="ri-volume-up-line"></i>)}
      </motion.button>
    </div>
  );
};

export default VideoPlayer;
