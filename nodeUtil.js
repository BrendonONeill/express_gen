#!/usr/bin/env node

import fs from "fs";
import  { Command } from 'commander';
import GenText from "./fileTemplate/fileGen.js";
const folders = ["src","src/public","src/public/images","src/public/js", "src/public/css", "src/routes", "src/routes/v1", "src/routes/v1/main"]
const files = ["src/index.js", "src/public/index.html","src/public/css/style.css", "src/public/js/main.js", "src/routes/v1/main/mainRoute.js", "src/routes/v1/main/main.js",".env","package.json"] 
let path = '' 
const program = new Command();

program
  .name('express builder')
  .description('sets up a basic express server')
  .version('1.0.0');

program
  .command('setup')
  .description('setup express')
  .argument('<location>', 'location to build express app')
  .action((location) => {
    if(location !== null ){
        path = location
        main()
    };
  });

program.parse(process.argv);

function fileGen(file, index)
{
    let Check =  fs.existsSync(`${path}/${file}`)

if(!Check)
{
    fs.writeFileSync(`${path}/${file}`,GenText[index])
}

}

async function folderGen(folderPath)
{
    let Check =  fs.existsSync(`${path}/${folderPath}`)
    if(!Check)
    {
        fs.mkdirSync(`${path}/${folderPath}`)
    }
}

async function main()
{
    for(const folder of folders)
    {
        await folderGen(folder)
    }
    for (const [index,file] of files.entries())
    {
        await fileGen(file, index)
    }
}

main()


