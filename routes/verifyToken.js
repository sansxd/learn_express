import jwt from 'jsonwebtoken';

//verificacion de token en header request
module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(400).send('Acceso denegado');
  try {
    const validar = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = validar;
    next();
  } catch (error) {
    res.status(400).send('Token Invalido');
  }
};
