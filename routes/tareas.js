import rutador from 'express';
import verify from './verifyToken';

const router = rutador.Router();

router.get('/', verify, (req, res) => {
  res.json({
    tareas: {
      nombre: 'wena cabros',
      descripcion: 'toy chato son las 3 51 am'
    }
  });
});

module.exports = router;
