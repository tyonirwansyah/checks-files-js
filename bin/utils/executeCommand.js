"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = void 0;
const boxSettings_1 = require("./boxSettings");
const successFileOutput_1 = require("./successFileOutput");
const failFileOutput_1 = require("./failFileOutput");
const child_process_1 = __importDefault(require("child_process"));
const boxen_1 = __importDefault(require("boxen"));
function executeCommand(fileDir, fileName) {
    return new Promise(function (resolve, reject) {
        child_process_1.default.exec(`node ${fileDir}`, (error) => {
            if (error !== null) {
                console.log(boxen_1.default(failFileOutput_1.failFileOutput(fileName), boxSettings_1.failBoxSettings));
                reject(error);
                return;
            }
            resolve(boxen_1.default(successFileOutput_1.successFileOutput(fileName), boxSettings_1.successBoxSettings));
            return;
        });
    });
}
exports.executeCommand = executeCommand;
//# sourceMappingURL=executeCommand.js.map