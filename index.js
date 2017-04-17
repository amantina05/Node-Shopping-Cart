const express = require('express');
const session = require('express-session');

// Express Application
const app = express();

// Server
app.listen(3000, () => console.log('Server initiated on port 3000'));