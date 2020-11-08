const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/reactb9`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});