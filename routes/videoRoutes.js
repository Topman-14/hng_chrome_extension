// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { uploadVideo, serveVideo } = require('../controllers/videoController');

// Define routes
router.post('/upload', uploadVideo); // Remove upload middleware from here
router.get('/play/:filename', serveVideo);

module.exports = router;
