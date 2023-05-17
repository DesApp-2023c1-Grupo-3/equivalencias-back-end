import express from 'express';

import { getChat, addMensaje } from '../controllers/mensajes_controller';
import { withErrorHandling } from './utils';

const router = express.Router();
router.get('/:id', withErrorHandling(getChat));
router.post('/', withErrorHandling(addMensaje));

export default router;
