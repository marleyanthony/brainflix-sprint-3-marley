import React from 'react';
import VideoItem from './VideoItem';


function VideoList(props) {
  // console.log(props.videoList);
  // console.log(props.params.params.id);

  // const { url } = props.params;

  return (
    <>
      <ul className="video-list">
        <h5 className="video-list__header">
          Next Video
        </h5>
        {
          props.videoList
            .filter(video => video.id !== props.params.params.id)
            .map((video) => (
              <VideoItem key={video.id} videoList={video} />
            ))
        }
      </ul>
    </>
  )
}

export default VideoList