# npm-package-template

Scaffolding script for developing npm packages.

Usage: 
```
npm exec --prefer-online @leothorp/npm-package-template new-pkg-name
```

## Features
* Generates suitable package.json and directory structure fulfilling minimum requirements for a publishable npm package.
* Includes re-exports from both index.js and index.browser.js, which are referenced by the package.json's `exports` field for distinct Node / Browser versions of the package.
* Adds a placeholder `bin` script for developing a command line executable.
* Basic default testing script to re-run your index.js code.


## Developing a package
1. `npm exec --prefer-online @leothorp/npm-package-template new-pkg-name` , which will generate a new project named `new-pkg-name` (or whatever name you specified) and `cd` into it.

2. Start adding your package code to src/index.js. By default, the template expects the exported "main" function there to be the entrypoint.

To quickly publish new patch versions of an npm package during development, this shell function may be convenient (past this into ~/.bash_profile or ~/.zprofile, depending on whether you use bash or zsh for your shell):
```
function npm-pub() {
    npm version patch && \
    npm publish --access public && \
    git push origin HEAD && \
    git push --tags
}
```
Usage: 
```npm-pub``` 
from within your package directory to bump the patch version, publish to npm, and push to your repo.
