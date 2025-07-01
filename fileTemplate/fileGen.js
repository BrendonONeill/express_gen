const arr = 
[
`import Express from "express"

const app = Express()

app.get("/", (req,res) => {
    res.json("hello world")
})


app.listen("3000", () => {
    console.log("app is listening on 3000")
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
`
test
`,
`
test
`,
`PORT="3000"

`,
`
{
  "scripts": {
    "dev": "npx vite",
    "build": "node nodeUtil.js"
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
    "dotenv": "^17.0.0"
  },
  "devDependencies": {
    "vite": "^7.0.0"
  }
}
`
]

export default arr;