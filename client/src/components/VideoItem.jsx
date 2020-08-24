import React from 'react';
import { Link } from 'react-router-dom';

function VideoItem(props) {
  // console.log(props.videoList)

  const { image, title, channel, id } = props.videoList;
  return (
    <li className="video-list__item">
      <Link to={"/video/" + id} className="video-list__container">
        <div className="video-list__img-wrapper">
          <img src={image} alt="Video 0" className="video-list__img" />
        </div>
        <div className="video-list__content-wrapper">
          <h5 className="video-list__title">
            {title}
          </h5>
          <h5 className="video-list__channel">
            {channel}
          </h5>
        </div>
      </Link>
    </li>
  )
}

export default VideoItem
