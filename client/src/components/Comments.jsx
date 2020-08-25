import React from 'react';
import CommentItem from './CommentItem';
import User from '../assets/imgs/user.jpg';

function Comments(props) {
  console.log(props.videoComments);

  const { videoComments } = props;

  if (videoComments === undefined) {
    return <p>Loading comments...</p>
  }

  return (
    <section className="comments">
      <h5 className="comments__comment-count">
        3 Comments
      </h5>
      <div className="comments__input-cont">
        <img src={User} alt="user" className="comments__user user-u" />
        <div className="comments__tablet-flex-wrapper">
          <div className="comments__input-wrapper">
            <label htmlFor="comment" className="comments__input-label">
              Join the Conversation
            </label>
            <input type="text" className="comments__input-field" />
          </div>
          <button className="comments__btn btn-u">Comment</button>
        </div>
      </div>

      <div className="comments__comments-wrapper">
        {
          props.videoComments.map((comments, id) => (
            <CommentItem key={id} videoComments={comments} />
          ))
        }
      </div>
    </section>
  )
}

export default Comments; 