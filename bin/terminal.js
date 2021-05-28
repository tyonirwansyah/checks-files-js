#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const prompts_1 = require("./prompts");
const yargs_1 = __importDefault(require("yargs"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const argv = yargs_1.default.option("ignore", { type: "array" }).argv;
const commandInput = argv._[0];
const ignoreInput = argv.ignore;
if (commandInput) {
    main_1.executeBuildTest(commandInput.trim(), ignoreInput);
}
else {
    runPrompt();
}
function runPrompt() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prompts_1.initiatePrompt();
    });
}
//# sourceMappingURL=terminal.js.map