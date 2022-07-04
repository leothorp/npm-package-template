Notes/References

-ES6 module reference: https://medium.com/digio-australia/migrating-an-npm-package-to-use-es-modules-d59877963d61
-uses conditional exports: https://nodejs.org/api/packages.html#conditional-exports

-partially modelled after the nanoid package.

-assumes the user will handle compilation for the browser themselves

Steps taken
1. create dir
2. git init
3. npm init
4. edit package.json- license, semver (0.0.1), name, description
5. mkdir src dist && touch src/index.js
6. touch .gitignore .npmignore
6.5 add stuff to .gitignore (node_modules)
7.  

  "sideEffects": false, if that is the case

8. in package.json:
```
  "exports": "src/index.js", //instead of "main"
  "type": "module",
```
9. add repo/author to package.json 
10. make gh repo with github cli (assumes public desired, --private if not):
gh repo create --source=. --remote=upstream --public --push

11. for cli: 'bin' dir, entrypoint file/package.json entry
12.  echo "{}" > .prettierrc
13. (assumes npm account exists) use bash_profile func npm-pub. example: npm-pub "new commit message"
function npm-pub() {
git add .
git commit -m $1
 npm version patch && \
 npm publish && \
 git push origin HEAD && \
 git push --tags
}