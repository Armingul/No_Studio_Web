import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surnames: { type: String,required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    phoneNumber: { type: String},
    documentType: { type: String},
    documentNumber: { type: String},
    active: { type: Boolean, default: true, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;