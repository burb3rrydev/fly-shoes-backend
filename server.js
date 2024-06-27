// server.js
const express = require('express');
const bodyParser = require('body-parser');
const shoesRoutes = require('./routes/shoes');

const app = express();

app.use(bodyParser.json());

app.use('/api/shoes', shoesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
