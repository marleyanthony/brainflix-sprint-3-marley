import React from 'react'
import video from '../assets/videos/video.mp4'
import PlayBtn from '../assets/icons/icon-play.svg'
import ScrubControl from '../assets/icons/icon-scrubber-control.svg'
import FullScreenBtn from '../assets/icons/icon-fullscreen.svg'
import VolBtn from '../assets/icons/icon-volume.svg'

function Hero(props) {
  // console.log(props.videoData);

  const { image } = props.videoData;

  return (
    <div className="hero">
      <div className="hero__controls">
        <button className="hero__play-btn"><img src={PlayBtn} alt="Play Button" /></button>
        <div className="hero__progress-bar">
          <div className="hero__progress-timeline">
            <img src={ScrubControl} alt="Scrub Control" className="hero__scrub" />
          </div>
          <div className="hero__progress-text">0:00 / 0:42</div>
        </div>
        <div className="hero__btn-group">
          <button className="hero__fullscreen-btn">
            <img src={FullScreenBtn} alt="Full Screen Button" />
          </button>
          <button className="hero__volume-btn">
            <img src={VolBtn} alt="Volume Button" />
          </button>
        </div>
      </div>

      <video className="hero__video" poster={image}>
        <source src={video} type="video/mp4" className="hero__video-content" />
      </video>
    </div>
  )
}

export default Hero;