import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/indexRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));