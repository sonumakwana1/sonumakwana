import express from 'express';

import * as UserController from '../controllers/user.controller.js';

const router = express.Router();

router.post("/save",UserController.save);
router.get("/fetch",UserController.fetch);
router.post("/login",UserController.login);
export default router;