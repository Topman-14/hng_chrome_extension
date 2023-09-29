const multer = require('multer');
const path = require('path');
const fs = require('fs');
const baseUrl = "localhost:"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const extension = path.extname(file.originalname);
    const filename = `video_${timestamp}${extension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

function uploadVideo(req, res) {
    upload.single('video')(req, res, (err) => {
        if (err) {
          return res.status(400).json({ error: 'File upload failed' });
        }
    
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
    
        const destinationPath = `${baseUrl}/play/${req.file.filename}`;
    
        res.json({
          status: 200,
          message: 'Video uploaded successfully',
          filePath: destinationPath, 
        });
      });
}

function serveVideo(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'uploads', req.params.filename));
}

module.exports = {
  uploadVideo,
  serveVideo
};
