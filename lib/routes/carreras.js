import express from 'express';

import {
  getCarrera,
  index,
  getTodasLasCarreras,
  show,
  addCarrera,
  updateCarrera,
  deleteCarrera,
} from '../controllers/carrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();
router.get('/todas', withErrorHandling(getTodasLasCarreras));
router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(getCarrera));
router.get('/:id', withErrorHandling(show));

router.post('/', withErrorHandling(addCarrera));

router.put('/:id', withErrorHandling(updateCarrera));

router.delete('/:id', withErrorHandling(deleteCarrera));

export default router;
