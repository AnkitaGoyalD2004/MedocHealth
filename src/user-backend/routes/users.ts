import * as express from 'express';
import { auth } from '../../shared/middleware/auth';
import { getProfile, login, register } from '../controllers/userController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);

export default router; 