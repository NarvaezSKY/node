import express  from 'express';
import {stockdatos, getApdz, createApdz, updateApdz,eliminar}  from '../controllers/control.js';
const router = express.Router()

const miruta = express.Router();

router.get('/', stockdatos)
router.get('/:id', getApdz)
router.post('/', createApdz)
router.put('/:id', updateApdz)
router.delete('/:id', eliminar)






miruta.get('/',stockdatos);

export default router;