import sh from 'shelljs'

sh.exec("npx @leothorp/npm-package-template@latest test-pkg")
sh.rm("-rf", "./test-pkg")