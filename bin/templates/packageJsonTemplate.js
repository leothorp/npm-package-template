

  export default {
    "name": "__placeholder__e",
    "version": "0.0.1",
    "description": "",
    "type": "module",
    "scripts": {
      "test": "node tests/run.js"
    },
    "engines": {
      "node": "^14 || ^16 || >=18"
    },
    "exports": {
      ".": {
        "browser": "./index.browser.js",
        "default": "./index.js"
      }
    },
    "browser": {
      "./index.js": "./index.browser.js"
    },
    "keywords": [],
    "author": "",
    "repo": "",
    "license": "MIT",
    "devDependencies": {

    },
    "dependencies": {
    },
    "bin": {
      "__placeholder__": "./bin/main.js"
    }
  }
  