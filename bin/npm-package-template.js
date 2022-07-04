#!/usr/bin/env node

import { main } from "../src";
import sh from 'shelljs';

// sh.mkdir('-p', `./`);
console.log(process.argv)
main()