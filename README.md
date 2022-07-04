baseline npm package example.



notes/references:

-ES6 module reference: https://medium.com/digio-australia/migrating-an-npm-package-to-use-es-modules-d59877963d61
-uses conditional exports: https://nodejs.org/api/packages.html#conditional-exports

-partially modelled after the nanoid package.

-assumes the user will handle compilation for the browser themselves

Steps taken
1. create dir
2. git init
3. npm init
4. edit package.json- license, semver (0.0.1), name (use scoped name if desired), description
5. mkdir src && touch src/main.js index.js
6. touch .gitignore .npmignore
6.5 add stuff to .gitignore (node_modules)
7.  

  "sideEffects": false, if that is the case

8. in package.json:
```
  "type": "module",
``` and add exports for node/browser as appropriate (see package.json here for example)

9. add repo/author to package.json 
10. make gh repo with github cli (assumes public desired, --private if not):

gh repo create --source=. --public --push 

gh repo create command reference: https://cli.github.com/manual/gh_repo_create

11. for cli: 'bin' dir, entrypoint file/package.json entry
12.  echo "{}" > .prettierrc
13. to cut a release: (assumes npm account exists and is logged in via npm login) can use the bash_profile function below, npm-pub. 
example usage: `npm-pub "new commit message"`
```
function npm-pub() {
    npm version patch && \
    npm publish --access public && \
    git push origin HEAD && \
    git push --tags
}
```