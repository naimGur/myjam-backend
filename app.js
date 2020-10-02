import express from 'express';
// TODO: import db

const app = express();
// Set up the express app
// get all todos

app.use(express.json())

app.get('/api/v1/song', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});