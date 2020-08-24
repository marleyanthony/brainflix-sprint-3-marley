import React from 'react';
import VideoItem from './VideoItem';


function VideoList(props) {
  // console.log(props.videoList);
  // console.log(props);

  // const { id } = props.videoList;

  return (
    <>
      <ul className="video-list">
        <h5 className="video-list__header">
          Next Video
        </h5>
        {/* props.videoList
            .filter(function (id) {
              return id !== this.props.params.id;
            })
            .map((video, id) => (
              <VideoItem key={id} videoList={video} />
            )) */}

        {
          props.videoList.map((video) => (
            <VideoItem key={video.id} videoList={video} />
          ))
        }
      </ul>
    </>
  )
}

export default VideoList