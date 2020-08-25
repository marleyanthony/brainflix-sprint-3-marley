import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import ThumbnailImage from '../assets/imgs/upload-preview.jpg'

class Upload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:5000/videos', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }


  render() {
    const { title, description } = this.state

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
              <form onSubmit={this.submitHandler}>
                <label className="upload__title-header">
                  Title Your Video
                </label>
                <input type="text" name="title" className="upload__title-input" placeholder="Add a title to your video" value={title} onChange={this.changeHandler} />
                <label className="upload__description-header">
                  Add a video description
                </label>
                <input type="text" name="description" className="upload__description-input" placeholder="Add a description of your video" value={description} onChange={this.changeHandler} />
                <div className="upload__publish-cancel-btn">
                  <button className="upload__publish-btn btn-u" type="submit">Publish</button>
                  <button className="upload__cancel-btn btn-u">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Upload
