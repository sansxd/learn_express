import rutador from 'express';
import verify from './verifyToken';
import Tarea from '../model/tareas';

const router = rutador.Router();

router.get('/', verify, async (req, res) => {
  try {
    const tareas = await Tarea.find()
    res.json(tareas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
 
});
//obtener un id especifico
router.get('/:id', verify,async(req, res) => {  
  try {
    const tarea = await Tarea.findById(req.params.id);
    console.log(tarea)
    return res.send(tarea);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error })
  }
  
})
//crear una nueva tarea
router.post('/', (req, res) => {
})

module.exports = router;
