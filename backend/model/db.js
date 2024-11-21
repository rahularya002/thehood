const mongoose = require('mongoose')

export async function dbConnection(){
    await mongoose.connect('mongodb+srv://new_user02:IvDjZBFF1bWYRSn3@cluster0.whnmo.mongodb.net/')
}

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String, 
    email: String,
    password: String,
})
export const UserModel = mongoose.Model('User', UserSchema); 