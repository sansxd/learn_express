import mongoose from 'mongoose';
require('dotenv').config();

const uri = process.env.DB_URI;

export async function conexion() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('conectado a DB de mongodb atlas');
  } catch (error) {
    handleError(error);
  }
}
