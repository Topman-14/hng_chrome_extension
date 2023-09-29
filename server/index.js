const express = require('express');
const app = express();
const path = require('path');
const videoRoutes = require('./routes/videoRoutes');
const multer = require('multer');
const PORT = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', videoRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});