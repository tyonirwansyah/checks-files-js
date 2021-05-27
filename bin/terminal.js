#!/usr/bin/env node
"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer");
const main_1 = require("./main");
const yargs_1 = __importDefault(require("yargs"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const argv = yargs_1.default.option("ignore", { type: "array" }).argv;
const prompt = new enquirer_1.Input({
    message: "Whats the directory folder you want to check?",
});
const commandInput = argv._[0];
const ignoreInput = argv.ignore;
if (commandInput) {
    main_1.executeBuildTest(commandInput.trim(), ignoreInput);
}
else {
    runPrompt();
}
function runPrompt() {
    prompt
        .run()
        .then((answer) => {
        console.log("Your output:", answer.trim());
        main_1.executeBuildTest(answer.trim());
    })
        .catch((e) => console.log(e));
}
//# sourceMappingURL=terminal.js.map