import express from 'express';
import { registerUser, loginUser } from '../controller/userController.js';
import authenticateJWT from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register',authenticateJWT, registerUser);


userRouter.post('/login',authenticateJWT,  loginUser);

export default userRouter;
