// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/items', (req, res) => {
  res.json([
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" }
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
