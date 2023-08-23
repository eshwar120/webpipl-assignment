const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bodyPraserErrorHandler = require('express-body-parser-error-handler');
const cors = require('cors');
const studentRoute = require('./routes/studentRoute');
require('dotenv').config();
const connectMongo = require('./db/connectMongo');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyPraserErrorHandler())

connectMongo();

app.use('/api/students', studentRoute);

app.use('*', (req, res) => {
    res.status(404).json({
        message: "Route not found"
    })
})

mongoose.connection.once('open', () => {

    console.log('connected to DB');

    //launching the server
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });

});