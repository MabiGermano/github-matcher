import { Router } from "express";
import axios from "axios";
import { dataSource } from "../data-source.js";
const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello world" }));
const login = async (request, response) => {
  const { username } = request.body;
  const githubResponse = await axios({
    method: "get",
    url: `https://api.github.com/users/${username}`,
    responseType: "json",
  });

  const dados = githubResponse.data;
  const user = {
    userName: dados.login,
    bio: dados.bio,
    name: dados.name,
    profileUrl: dados.html_url,
    urlImage: dados.avatar_url,
  };
  const userRepository = dataSource.getRepository("User");
  userRepository.save(user);
  return response.json(user);
};
router.post("/login", login);

//tratar erros
//validar usuarios
export default router;
