const arr = 
[
`import Express from "express"
import 'dotenv/config'

import path from 'path'
import { dirname} from 'path';
import { fileURLToPath } from 'url';
import mainRoute from "./routes/v1/main/mainRoute.js";


const port = process.env.PORT
const app = Express()

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(Express.json({}));
app.use(Express.urlencoded({ extended: true }));

app.use('/', Express.static(path.join(__dirname, 'public')));

app.use("/main",mainRoute)


app.listen(port, () => {
    console.log("App is listening on " + port)
})
`,  
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Document</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/main.js" defer></script>
    </head>
    <body>
        <h1>Hello World!!</h1>
    </body>
</html>
`,
`*,*::before,*::after
{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    background-color: bisque;
}
`,
`let h1 = document.querySelector("h1")

h1.colour = "blue";
`,
`import { Router } from "express";
import { main } from "./main.js";

const router = Router()

router
.route("/")
.get(main)

export default router
`,
`export function main(req, res)
{
    res.json("main api link")
}
`,
`PORT="3000"

`,
`
{
  "scripts": {
    "dev": "node --watch src/index.js"
  },
  "name": "node-gen",
  "version": "1.0.0",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "type": "module",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0",
    "dotenv": "^17.0.1"
  }
}
`
]

export default arr;