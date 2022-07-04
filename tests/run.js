import sh from 'shelljs'
sh.cd("..");

sh.exec("npx @leothorp/npm-package-template@latest test-pkg")
// sh.rm("-rf", "./test-pkg")
sh.cd("./npm-package-template");
