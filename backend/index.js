const express = require('express');
const JWT = require('jsonwebtoken');
import { User } from './model/db';

const app = express();

app.use(express.json());

app.post('/api/v1/signup', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    UserModel.createOne

})

app.post('/api/v1/signin', )