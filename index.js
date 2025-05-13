import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import pokemonRouter from "./routes/pokemonStatus.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3006

app.set("port",PORT);
app.use(express.json());
app.use("/api/pokemon",pokemonRouter);



mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Conect to DB"))
.catch((error)=>console.error(error));

app.listen(PORT,()=>{
    console.log(`Listening in port ${PORT}`);
});