const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/User');

const app = express();
const port = 3001; // Backend server port

app.use('/api/users', userRoutes);
app.use(express.json()); // for parsing application/json

// MongoDB connection using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Use the User routes
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
