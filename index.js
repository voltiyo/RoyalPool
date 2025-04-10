import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));


let PORT = 5000


if (process.env.NODE_ENV === "production"){
    PORT = 3000
    console.log("production mode enabled !")
    app.use(express.static(path.join(__dirname, "dist")));
    app.use("/public", express.static(path.join(__dirname, "public")));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
}

app.get("/api/test", ( req, res ) => {
    res.json("working")
})


app.listen(PORT, () => { console.log("server listening on port ", PORT) })