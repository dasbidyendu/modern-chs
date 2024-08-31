import mongoose, { Schema, Document } from "mongoose";


export interface User extends Document{
    username: string;
    email: string;
    password: string;
    isPremium: boolean;
}


const UserSchema:Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/,'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    isPremium: {
        type: Boolean,
        default: false
    }
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema)

export default UserModel;