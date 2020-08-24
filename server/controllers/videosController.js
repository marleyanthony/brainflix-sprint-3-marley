const videos = require('../models/videoModel');

function listVideos(req, res) {
  res.json(videos.list());
}

module.exports = { listVideos };