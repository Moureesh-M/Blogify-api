const express = require('express');

const app = express();
const PORT = 3000;

const postRouter = require('./routes/posts.routes.js');

app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is attempting to run at http://localhost:${PORT}/`);
});
