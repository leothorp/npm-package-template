#!/usr/bin/env node

import sh from 'shelljs';
// import packageJsonTemplate from "./templates/baseLayout.package.json"
import fs from 'fs'
const name = process.argv[2]
if (!name) {
    console.log("name is required");
    process.exit(1)
}
console.log('creating', name)
const newPackageDir = `./${name}`
// sh.mkdir('-p', newPackageDir);
sh.cp('-r', "./templates/baseLayout", ".")
sh.mv("./baseLayout", newPackageDir)
sh.cd(newPackageDir);
sh.exec('pwd')
const packageJsonTemplate = fs.readFileSync('./template-package.json')
const newPackageJson = JSON.stringify(packageJsonTemplate).replaceAll("__placeholder__", name);
sh.echo(newPackageJson).to("./package.json")
sh.exec("git init")