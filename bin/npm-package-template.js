#!/usr/bin/env node

import sh from 'shelljs';
import * as url from 'url';
// import packageJsonTemplate from "./templates/baseLayout.package.json"
import fs from 'fs'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const name = process.argv[2]
if (!name) {
    console.log("name is required");
    process.exit(1)
}
console.log('creating', name)
const newPackageDir = `./${name}`
// sh.mkdir('-p', newPackageDir);
const tmpDirPath = fs.mkdtempSync(
    path.join(__dirname, "tmp")
  );
sh.cp('-r', `${__dirname}/templates/baseLayout`, tmpDirPath)
sh.mv(`${tmpDirPath}/baseLayout`, newPackageDir)
sh.rm('-rf', tmpDirPath)
sh.cd(newPackageDir);
sh.exec('pwd')
const packageJsonTemplate = fs.readFileSync('./package.json', {encoding: 'utf-8'})
const newPackageJson = packageJsonTemplate.replaceAll("__name_placeholder__", name);
sh.echo(newPackageJson).to("./package.json")
sh.exec("git init")
sh.exec("git add .; git commit -m 'init'")
sh.cd("-");
