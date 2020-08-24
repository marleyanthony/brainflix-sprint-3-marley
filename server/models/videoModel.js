const fs = require('fs');
const path = require('path');

const videosFile = path.join(__dirname, '../data/videoData.json');

function Video(title, channel, views) {
  this.title = title;
  this.channel = channel;
  this.views = views;
}

function list() {
  const data = fs.readFileSync(videosFile);
  return JSON.parse(data);
}

module.exports = { list }