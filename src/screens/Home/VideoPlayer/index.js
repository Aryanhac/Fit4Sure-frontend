// VideoPlayer.js
import React, {useRef } from 'react';
import YouTube from 'react-youtube';
import styles from "./Video.module.sass";
import cn from "classnames";


const VideoPlayer = () => {
  const youtubePlayerRef = useRef(null);
  const opts = {
    height: '678px',
    width: '1187px',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel:0,
      showinfo:0
    },
  };

  const onReady = (event) => {
    youtubePlayerRef.current = event.target;
    applyBorderRadius();
  };

  const applyBorderRadius = () => {
    if (youtubePlayerRef.current) {
      youtubePlayerRef.current.getIframe().style.borderRadius = '24px';
    }
  };


  return (
    <div className={cn("section",styles.section)} id='videoPlayer'>
      <YouTube videoId='wnHW6o8WMas' opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;