const  { Schema, model }=  require( 'mongoose');

const UserSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true , unique: true},
    image: {type: String},
    enable: {type: Boolean, required: true},
    verificationCode: {type: String,},
    role: {type: String, required: true},
  },
);

module.exports =  model('User', UserSchema);