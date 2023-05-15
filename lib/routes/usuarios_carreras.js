import express from 'express';

import {
  getUsuario_carrera,
  getTodosLosUsuarios_carrera,
  addUsuarios_carrera,
  updateUsuario_carrera,
  deleteUsuario_carrera,
} from '../controllers/usuario_carrera';
import { withErrorHandling } from './utils';

const router = express.Router();
router.get('/todas', withErrorHandling(getTodosLosUsuarios_carrera));
router.get('/:id', withErrorHandling(getUsuario_carrera));
router.post('/', withErrorHandling(addUsuarios_carrera));
router.put('/:id', withErrorHandling(updateUsuario_carrera));
router.delete('/:id', withErrorHandling(deleteUsuario_carrera));

export default router;
