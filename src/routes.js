import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.json({ mensagem: "Alô mundo!!!" })
});

export default routes;