import express from 'express';
import { auth, checkRole } from '../../shared/middleware/auth';
import { deleteUser, getAllUsers, updateUserRole } from '../controllers/adminController';

const router = express.Router();

// Fix: Use middleware functions individually
router.use(auth);
router.use(checkRole(['admin']));

router.get('/users', getAllUsers);
router.patch('/users/:userId/role', updateUserRole);
router.delete('/users/:userId', deleteUser);

export default router; 