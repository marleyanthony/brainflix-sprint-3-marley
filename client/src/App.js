import React, { Component } from 'react';
import axios from 'axios';
import './style/app.css';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoInfo from './components/VideoInfo';
import VideoList from './components/VideoList';
import Comments from './components/Comments';


class App extends Component {
  state = {
    // main video
    videoData: {},

    // sidebar videos
    videoList: []
  }

  componentDidUpdate(_prevProps, prevState) {
    // console.log('App Component Updated');

    const { params } = this.props.match;

    console.log(this.props.match);

    if (
      params.id !== undefined &&
      prevState.videoData.id !== params.id
    ) {
      this.getActiveVideo(params.id);
    }
  }

  componentDidMount() {
    this.getVideoList();
    this.getActiveVideo('1af0jruup5gu');
  }

  getVideoList() {
    axios
      .get('http://localhost:5000/videos')
      .then((response) => {
        console.log(response.data)
        const videos = response.data;
        this.setState(
          { videoList: videos }
        )
      })
  }

  getActiveVideo(videoId) {
    axios
      .get(`http://project-2-api.herokuapp.com/videos/${videoId}?api_key=126f1aee-f9d5-4f02-bea2-2bb440605fde`)
      .then((response) => {
        // console.log(response.data);
        const mainVideo = response.data;
        this.setState(
          { videoData: mainVideo }
        )
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero videoData={this.state.videoData} />
        <VideoInfo videoData={this.state.videoData} />
        <Comments videoComments={this.state.videoData.comments} />
        <VideoList videoList={this.state.videoList} params={this.props.match} />
      </div>
    );
  }
}

export default App;
