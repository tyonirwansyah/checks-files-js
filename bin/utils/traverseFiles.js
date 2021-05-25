"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseFiles = void 0;
const fs_1 = __importDefault(require("fs"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const absolutePath = process.cwd();
const traverseFiles = function (absolutePath, filesDirectory, fileName) {
    fs_1.default.readdirSync(absolutePath).forEach((file) => {
        const subpath = absolutePath + "/" + file;
        fileName.push(file);
        if (fs_1.default.lstatSync(subpath).isDirectory()) {
            exports.traverseFiles(subpath, filesDirectory, fileName);
        }
        else {
            filesDirectory.push(absolutePath + "/" + file);
        }
    });
};
exports.traverseFiles = traverseFiles;
//# sourceMappingURL=traverseFiles.js.map