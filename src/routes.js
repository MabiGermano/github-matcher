import { Router } from "express";
import { login } from "./services/UserService.js";

const router = Router();
router.get('/', (req, res) => res.json({message: "Hello world"}));
router.post('/login', login);

export default router;
