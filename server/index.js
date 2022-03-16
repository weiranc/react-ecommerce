const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const cors = require('cors');
const router = require('./router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}`));
