import React from 'react'
import viewsImg from '../assets/icons/icon-views.svg'
import likesImg from '../assets/icons/icon-likes.svg'

function VideoInfo(props) {
  // console.log(props.videoData);

  const { title, channel, date, views, likes, description } = props.videoData;

  return (
    <section className="video-info">
      <h1 className="video-info__heading">
        {title}
      </h1>
      <div className="video-info__flex-wrapper">
        <div className="video-info__name-cont">
          <h3 className="video-info__name">
            {channel}
          </h3>
          <h4 className="video-info__date">
            {date}
          </h4>
        </div>
        <div className="video-info__views-cont">
          <div className="video-info__views-wrapper">
            <img src={viewsImg} alt="views" className="video-info__views-icon" />
            <h3 className="video-info__views-count">{views}</h3>
          </div>
          <div className="video-info__likes-wrapper">
            <img src={likesImg} alt="likes" className="video-info__likes-icon" />
            <h3 className="video-info__likes-count">{likes}</h3>
          </div>
        </div>
      </div>
      <div className="video-info__description">
        {description}
      </div>
    </section>
  )
}

export default VideoInfo;