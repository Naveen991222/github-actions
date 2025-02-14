const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions and Docker Hub!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
