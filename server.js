const express = require('express');
const app = express();
const port = 3001; // Ensure this is different from your React app's port

app.get('/', (req, res) => {
  res.send('Hello World from backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
