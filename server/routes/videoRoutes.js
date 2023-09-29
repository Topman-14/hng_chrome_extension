// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { uploadVideo, serveVideo, landing } = require('../controllers/videoController');

// Define routes
router.post('/upload', uploadVideo); // Remove upload middleware from here
router.get('/play/:filename', serveVideo);
router.get('/', landing)

module.exports = router;
