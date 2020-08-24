import React from 'react';
import User from '../assets/imgs/grey-square.jpg'

function CommentItem(props) {

  // console.log(props.videoComments);
  const { name, date, comment } = props.videoComments;

  return (
    <div className="comments__comment">
      <img src={User} alt="User Img" className="comments__img" />
      <div className="comments__contents-container">
        <div className="comments__header">
          <h5 className="comments__header-name">{name}</h5>
          <h5 className="comments__header-date">{date}</h5>
        </div>
        <div className="comments__body">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
