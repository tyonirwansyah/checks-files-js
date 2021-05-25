"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterFiles = void 0;
function filterFiles(filesList) {
    const filterFilesList = [];
    for (let i = 0; i < filesList.length; i++) {
        if (filesList[i].split(".").pop() === "js") {
            filterFilesList.push(filesList[i]);
        }
    }
    return filterFilesList;
}
exports.filterFiles = filterFiles;
//# sourceMappingURL=filterFiles.js.map