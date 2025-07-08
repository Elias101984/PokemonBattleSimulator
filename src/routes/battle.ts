import { Router } from 'express';
import { battleHandler } from '../controllers/BattleController';

const router = Router();

router.post('/api/battle', battleHandler);

export default router;
