const express = require('express');
const UserData = requre('./models/user');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const port = 3000;

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use('/api', api);

app.get('/quiz', (req,res) => {
    res.send("Hello from server");
});

app.listen(port, function(){
    console.log("server running on localhost:"+port);
});