const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

requireDir('./src/models');

const uri = 'mongodb+srv://denyspm:mongodb@cluster0-a7oqu.mongodb.net/test';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', require('./src/routes'));

app.listen(3333);