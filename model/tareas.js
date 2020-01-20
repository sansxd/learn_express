const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tareaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  descripcion: {
    type: String,
    required: true,
    max: 255,
    min: 6
  }
});

var Tarea = mongoose.model('tareas', tareaSchema);
module.exports = Tarea;