import express from "express";
import cors from "cors";
import router from "./routes.js";
import { dataSource } from "../data-source.js";


const app = express();
app.use(cors());
app.use(express.json());
dataSource.initialize();
app.use(router);

app.listen(3334);