const express = require('express');
const JWT = require('jsonwebtoken');
const UserModel = require('./model/db')
const mongoose = require('mongoose')
const  JWT_SECRET  = "bankai"

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://new_user02:IvDjZBFF1bWYRSn3@cluster0.whnmo.mongodb.net/thehood')


app.post('/api/v1/signup', async(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    try{
        await UserModel.create({
            firstName: firstName,
            lastname: lastName,
            email: email,
            password: password
        })
    
        res.json({
            message: "User Create Successfully"
        })
    } catch(e){
        res.status(411).json({
            message: "Error Creating User"
        })
    }
    
   
})

app.post('/api/v1/signin', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        email,
        password,
    })

    if(existingUser){
        const token = JWT.sign({
            id: existingUser._id
        }, JWT_SECRET)

        res.json({
            token
        })
    }else{
        res.status(401).json({
            message: "Incorrect Credentials"
        })
    }
})


app.listen(3000)