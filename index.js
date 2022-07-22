const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const mongoose =require('mongoose');
require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

Routes.configure(app);

const start =async () => {
    await mongoose.connect('mongodb://localhost:27017/cursoCloudX');

    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    });
    
};

start();