import mongoose from 'mongoose';
require('dotenv').config();

// import { uri } from './config';

const uri = process.env.DB_URI;
// const uri =
//   'mongodb+srv://sergio:sans@mongo-lico-yjw0p.azure.mongodb.net/test?retryWrites=true&w=majority';

export async function conexion() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true
    });
    console.log('conectado a DB de mongodb atlas');
  } catch (error) {
    handleError(error);
  }
}
