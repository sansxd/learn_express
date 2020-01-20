import rutador from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../model/user';
const router = rutador.Router();

const { registerValidation, loginValidation } = require('../validation');

//metodo post de registro de usuario
router.post('/register', async (req, res) => {
  //validacion antes de ingresar al usuario
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //validar si el email de usuario ya existe
  const existeEmail = await Usuario.findOne({ email: req.body.email });
  if (existeEmail) return res.status(400).send('El email ya ha sido ingresado');

  //hash constraseña
  const sale = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(req.body.password, sale);

  //creacion de usuario
  const usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    password: hashpass
  });
  try {
    const usuarioGuardado = await usuario.save();
    res.send({ usuario: usuario._id });
  } catch (error) {
    res.status(400).send(error);
  }
});
//metodo post login de usuario
router.post('/login', async (req, res) => {
  //validacion antes de ingresar al usuario
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //validar de datos
  const validarUsuario = await Usuario.findOne({ email: req.body.email });
  if (!validarUsuario) return res.status(400).send('El email no encontrado');

  //comparar contraseña
  const validarPass = await bcrypt.compare(
    req.body.password,
    validarUsuario.password
  );
  if (!validarPass) return res.status(400).send('Contraseña invalida');

  //creacion de token
  const token = jwt.sign({ _id: validarUsuario._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

});

module.exports = router;
