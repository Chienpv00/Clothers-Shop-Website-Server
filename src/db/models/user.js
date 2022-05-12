import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    id: { type: Number, required: true },
    userName: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    image: {type: String},
    enable: {type: Boolean, required: true},
    verificationCode: {type: String, required: true},
    role: {type: String, required: true},
  },
);

module.exports =  model('User', UserSchema);