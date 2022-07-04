good reference: https://medium.com/swlh/how-to-publish-an-es6-module-to-npm-43dda8aabbf

ES6 module reference: https://medium.com/digio-australia/migrating-an-npm-package-to-use-es-modules-d59877963d61
-uses conditional exports: https://nodejs.org/api/packages.html#conditional-exports

(just do the latter: no need to compile. look at how nanoid is distributed/package.json for reference.)
1. create dir
2. git init
3. npm init
4. edit package.json- license, semver (0.0.1), name, description
5. mkdir src dist && touch src/index.js
6. touch .gitignore .npmignore
6.5 add stuff to .gitignore (node_modules)
7.  

  "sideEffects": false, if that is the case

8. (for esm) in package.json:
```
  "exports": "src/index.js", //instead of "main"
  "type": "module",
```
9. add repo/author to package.json 
10. make gh repo (assumes public desired, --private if not):

gh repo create --source=. --remote=upstream --public --push