import jwt from 'jsonwebtoken';

//verificacion de token en header request
module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  //si el token es undefined return 400
  if (!token) return res.status(400).send('Acceso denegado, nesecita logearse');
  try {
    //se verifica el token
    const validar = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = validar;
    next();
  } catch (error) {
    res.status(400).send('Token Invalido');
  }
};
