#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { Input } from "enquirer";
import { executeBuildTest } from "./main";
import yargs from "yargs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const argv: any = yargs.argv;

const prompt = new Input({
  message: "Whats the directory folder you want to check?",
});

const commandInput = argv._[0];

if (commandInput) {
  executeBuildTest(commandInput.trim());
} else {
  runPrompt();
}

function runPrompt() {
  prompt
    .run()
    .then((answer: string) => {
      console.log("Your output:", answer.trim());
      executeBuildTest(answer.trim());
    })
    .catch((e: Error) => console.log(e));
}
