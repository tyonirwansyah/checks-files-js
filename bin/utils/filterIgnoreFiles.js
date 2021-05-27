"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreFiles = void 0;
function ignoreFiles(ignoredFiles, fileDirs, fileNames) {
    while (fileNames.some((v) => ignoredFiles.includes(v))) {
        for (let i = 0; i < fileNames.length + 1; i++) {
            if (includesIgnoreFile(ignoredFiles, fileNames[i])) {
                fileDirs.splice(i, 1);
                fileNames.splice(i, 1);
            }
        }
    }
}
exports.ignoreFiles = ignoreFiles;
const includesIgnoreFile = (ignoredFiles, fileName) => {
    for (let i = 0; i < ignoredFiles.length; i++) {
        if (ignoredFiles[i].includes(fileName)) {
            console.log(ignoredFiles[i]);
            console.log("spring");
            return true;
        }
    }
};
//# sourceMappingURL=filterIgnoreFiles.js.map