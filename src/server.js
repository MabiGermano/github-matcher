import express from "express";

const app = express();

app.use(express.json());
const port = 3334;
app.listen(port, console.log(`Server port ${port}`));
