// server for practice angular app 
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const port = 3000; // The correct variable is 'port', not 'PORT'
const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Routes
app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.post('/enroll', function(req, res) {
    console.log(req.body);
    res.status(200).send({"message": "Data received"});  
});

// Start the server using app.listen()
app.listen(port, function() {
    console.log("Server running on localhost:" + port);
});
