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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiatePrompt = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const enquirer_1 = require("enquirer");
const main_1 = require("./main");
// Asks the user directory
const promptMessage = [
    "Whats the directory folder you want to check?",
    "Do you have a file you want to ignore?",
    "Type the filename you want to ignore",
];
function initiatePrompt() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield enquirer_1.prompt([
            {
                type: "input",
                name: "folderDirectory",
                message: promptMessage[0],
            },
            {
                type: "Confirm",
                name: "wantIgnore",
                message: promptMessage[1],
            },
        ]);
        const folderDirectory = response.folderDirectory;
        if (response.wantIgnore === true) {
            const askIgnoreFiles = yield enquirer_1.prompt([
                {
                    type: "List",
                    name: "ignoreFileList",
                    message: promptMessage[2],
                },
            ]);
            // Initate build test by ignoring files.
            const ignoredFiles = askIgnoreFiles.ignoreFileList;
            yield main_1.executeBuildTest(folderDirectory, ignoredFiles);
        }
        else {
            main_1.executeBuildTest(folderDirectory);
        }
    });
}
exports.initiatePrompt = initiatePrompt;
//# sourceMappingURL=prompts.js.map