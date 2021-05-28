#!/usr/bin/env node

import { executeBuildTest } from "./main";
import { initiatePrompt } from "./prompts";
import yargs from "yargs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const argv: any = yargs.option("ignore", { type: "array" }).argv;

const commandInput = argv._[0];
const ignoreInput = argv.ignore;

if (commandInput) {
  executeBuildTest(commandInput.trim(), ignoreInput);
} else {
  runPrompt();
}

async function runPrompt() {
  await initiatePrompt();
}
