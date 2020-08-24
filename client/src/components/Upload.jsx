import React from 'react';
import Header from './Header';
import ThumbnailImage from '../assets/imgs/upload-preview.jpg'

function Upload() {
  return (
    <>
      <Header />
      <section className="upload">
        <h2 className="upload__header">
          Upload Video
        </h2>

        <div className="upload__container">
          <div className="upload__thumbnail">
            <h5 className="upload__thumbnail-header">
              Video Thumbnail
            </h5>
            <img src={ThumbnailImage} alt="Thumbnail Upload" className="upload__thumbnail-img" />
          </div>
          <div className="upload__title">
            <h5 className="upload__title-header">
              Title Your Video
            </h5>
            <input type="text" name="Video Title" className="upload__title-input" placeholder="Add a title to your video" />
            <h5 className="upload__description-header">
              Add a video description
            </h5>
            <input type="text" name="Video Description" className="upload__description-input" placeholder="Add a description of your video" />
          </div>
        </div>

        <div className="upload__publish-cancel-btns">
          <button className="upload__publish-btn btn-u">Publish</button>
          <button className="upload__cancel-btn btn-u">Cancel</button>
        </div>
      </section>
    </>
  )
}

export default Upload
