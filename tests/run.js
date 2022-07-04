import sh from 'shelljs'
sh.cd("..");

sh.exec("npx @leothorp/npm-package-template@latest test-pkg")
sh.rm("-rf", "./test-pkg")
shell.cd("./npm-package-template");
