import React, { useState, useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  return (
    <div className="video-player" style={{ position: 'relative' }}>
      <video ref={videoRef} src={src} muted={muted} autoPlay={true} loop={true} controls={false} style={{ width: '100%' }} />
      <button style={{  position: 'absolute', top: '69%', left: '90%', transform: 'translate(-50%, -50%)', zIndex: 9999 }} onClick={toggleMute}>
        {muted ? <i class="ri-volume-mute-line"></i> : <i class="ri-volume-up-line"></i>    }
        
      </button>
    </div>
  );
};

export default VideoPlayer;
