import axios from "axios";

export const login = async (request, response) => {
    const {username} = request.body;
    const githubResponse = await axios({
        method: "get",
        url: `https://api.github.com/users/${username}`,
        responseType: "json"
    });
    console.log(githubResponse.data);
    return response.json(githubResponse.data)
}