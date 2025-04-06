import express from 'express';
import { getUser, registerUser } from '../controllers/userController';
import upload from '../middlewares/upload';
import { uploadProfilePic } from '../controllers/userController';
const router = express.Router();

router.get('/:id', getUser);
router.post('/register', registerUser);
router.post('/upload', upload.single('image'), uploadProfilePic);

export default router;
