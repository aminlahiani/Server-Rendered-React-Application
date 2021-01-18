import React from "react"
import express from "express"
import { readFileSync } from 'fs';
import { renderToString } from 'react-dom/server';
import { App } from "../client/App";

const app = new express();

app.use(express.static("dist"));

app.get("/", async ( _req, res )=>{


    const rendered = renderToString(<App/>);
    const index = readFileSync(`public/index.html`, `utf8`);

    res.send(index.replace("{{rendered}}", rendered));
 
});


app.listen(5200)
console.log("app is rannig on port 5200")