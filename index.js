const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3030;

function getRandomName(namesArray) {
  if (namesArray.length === 0) {
    return "No names available";
  }

  const randomIndex = Math.floor(Math.random() * namesArray.length);
  const randomName = namesArray[randomIndex];
  return randomName;
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Use the cors middleware
app.use(cors());

app.get('/api/names', (req, res) => {
  const randomName = getRandomName(names);
  res.send(`Random Name: ${randomName}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
