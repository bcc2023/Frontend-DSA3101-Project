import express from "express";
import cors from "cors";

const app = express();

app.use(cors());



app.listen(4000, () => console.log(`backend app is running`));